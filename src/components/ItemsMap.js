import { useEffect, useState, useRef } from "react";
import * as THREE from 'three';
import { Environment, Grid, OrbitControls, Image, Text, OrthographicCamera } from "@react-three/drei";
import { useThree, useFrame } from '@react-three/fiber';

export const ItemsMap = (props) => {
  const { searchText } = props;
  const [hoveredImage, setHoveredImage] = useState(null);
  const [hoveredImageSide, setHoveredImageSide] = useState(0);
  const [hoverTextBackgoundSize, setHoverTextBackgoundSize] = useState([0, 0]);
  const [items, setItems] = useState(null);
  const { camera } = useThree();
  const [foundItem, setFoundItem] = useState(null);
  const initialPosition = useRef([...camera.position]);

  useEffect(() => {
    if (items && items.length) {
      let foundItem1 = items[0][0].find(item => item.text === searchText);
      if (foundItem1) {
        setFoundItem(foundItem1);
        const targetPosition = foundItem1.position;
        const [x, y, z] = targetPosition;
        console.log(x, y, z);
        camera.position.set(x, y + 12, z); // Adjust the height offset as needed
        camera.lookAt(x, y, z);
        // camera.position.lerp(foundItem.position, 0.05);
      }
    }
  }, [searchText])

  useEffect(() => {
    const generateItemPosition = (lane, side, index) =>  {
      const c = Math.floor(index / 8);
      const x = -8.25 + lane * 6 + (side ? 3.5 : 0); 
      const z = 3.75 - 0.5 * index - c / 2;
      return [x, 0, z]
    }
    const fetchJsonData = async () => {
      try {
        const response = await fetch('data/items.json',
        {
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
      );
        let data = await response.json();
        if (data && data.length) {
          data = data.map((lane, laneIndex) => {
            return lane.map((side, sideIndex) => {
              return side.map((item, itemIndex) => {
                const newItem = {
                  imageUrl: `/stackable-items/${item}.png`,
                  text: item,
                  position: generateItemPosition(laneIndex, sideIndex, itemIndex)
                }
                return newItem
              })
            })
          })
          setItems(data);
        }
      } catch (error) {
        console.error('Error fetching JSON:', error);
      }
    };

    fetchJsonData();
  }, []);

  function updateHoverTextBackgoundSize(text) {
    const size = text.geometry.boundingBox;
    setHoverTextBackgoundSize([Math.abs(size.min.x - size.max.x), Math.abs(size.min.y - size.max.y)])
  }

  return (
    <>
      <Environment preset="sunset"/>
      <ambientLight intensity={0.1} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls enableRotate={true}/>
      {/* <Grid infiniteGrid /> */}
      {
        items && items.map((lane, laneIndex) =>  (
          <group key={laneIndex}>
            {
              lane.map((side, sideIndex) => (
                <group key={sideIndex}>
                  {
                    side.map((item, itemIndex) => (
                      <group 
                        key={itemIndex}
                      >
                        <group
                          onPointerOver={() => {setHoveredImage(item); setHoveredImageSide(sideIndex);}}
                          onPointerOut={() => setHoveredImage(null)}
                        >
                          <Image url={item.imageUrl}
                            position={item.position}
                            scale={[0.5, 0.5, 0.5]}
                            rotation={[-Math.PI / 2, 0, 0]}
                          />
                          <Text 
                            position={[item.position[0] + (sideIndex ? 1 : -1) * 0.5, item.position[1], item.position[2]]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            fontSize={0.3}
                            color="black"
                            anchorX="center"
                            anchorY="middle"
                          >
                            {itemIndex + 1}
                          </Text>
                        </group>
                        {
                          itemIndex && !(itemIndex % 8) ? (
                            <mesh position={[item.position[0] + (sideIndex ? 1 : -1) * 0.75, item.position[1], item.position[2] + 0.5]}>
                              <boxGeometry args={[2, 0.1, .5]} />
                              <meshBasicMaterial color="black"/>
                            </mesh>
                          ) : undefined
                        }
                        {
                          !(itemIndex % 2) ? (
                            <mesh position={[item.position[0] + (sideIndex ? 1 : -1) * 1.25, item.position[1], item.position[2] - 0.25]}>
                              <boxGeometry args={[1, 0.1, 1]} />
                              <meshBasicMaterial color="black"/>
                            </mesh>
                          ) : undefined
                        }
                      </group>
                      ))
                  }
                </group>
              ))
            }
          </group>
        ))
      }
      {hoveredImage && (
        <group>
          <mesh position={[hoveredImage.position[0] + (hoveredImageSide ? -1 : 1) * (0.5 + hoverTextBackgoundSize[0]) / 2, 1, hoveredImage.position[2]]}>
            <boxGeometry args={[hoverTextBackgoundSize[0], 0, hoverTextBackgoundSize[1]]} />
            <meshBasicMaterial color="gray" transparent opacity={0.8} />
          </mesh>
          <Text 
            position={[hoveredImage.position[0] + ((hoveredImageSide ? -1 : 1) * 0.25), 1, hoveredImage.position[2]]}
            rotation={[-Math.PI / 2, 0, 0]}
            color="red"
            fontSize={0.4}
            anchorX={hoveredImageSide ? 'right' : 'left'}
            anchorY="middle"
            onSync={(text) => updateHoverTextBackgoundSize(text)}
          >
            {hoveredImage.text}
          </Text>
        </group>
      )}
    </>
  )
}
