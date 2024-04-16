import { useEffect, useRef, useState } from "react";
import * as THREE from 'three';
import { Environment, Grid, OrbitControls, Image, Text, useCursor, Html } from "@react-three/drei";
import ItemsManager from "../utils/items-manager";

export const ItemsMap = () => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [hoveredImageSide, setHoveredImageSide] = useState(0);
  const [hoverTextBackgoundSize, setHoverTextBackgoundSize] = useState([0, 0]);
  const items = [
    [[], []],
    [[], []],
    [[], []]
  ]

  items.map((lane, laneIndex) => {
    lane.map((side, sideIndex) => {
      for (let i = 0; i < 60; i++) {
        side.push({
          imageUrl: 'https://source.unsplash.com/random/256x256',
          text: 'Iron ingot'
        })
      }
    })
  })

  items.map((lane, laneIndex) => {
    lane.map((side, sideIndex) => {
      side.map((item, itemIndex) => {
        item.position = generateItemPosition(laneIndex, sideIndex, itemIndex);
      })
    })
  })

  function generateItemPosition(lane, side, index) {
    const r = (index + 1) % 8;
    const c = Math.floor(index / 8);
    const x = -8.25 + lane * 6 + (side ? 3.5 : 0); 
    const z = 3.75 - 0.5 * index - c / 2;
    return [x, 0, z]
  }

  const itemsManager = new ItemsManager();
  // const items = itemsManager.readItems();
  // itemsManager.writeItems(items);

  useEffect(() => {
  }, [])

  function updateHoverTextBackgoundSize(text) {
    const size = text.geometry.boundingBox;
    setHoverTextBackgoundSize([Math.abs(size.min.x - size.max.x), Math.abs(size.min.y - size.max.y)])
  }

  return (
    <>
      <Environment preset="sunset"/>
      <ambientLight intensity={0.1} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls enableRotate={false}/>
      {/* <Grid infiniteGrid /> */}
      {
        items.map((lane, laneIndex) =>  (
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
          <mesh position={[hoveredImage.position[0] + (hoveredImageSide ? -1 : 1) * (0.5 + hoverTextBackgoundSize[0]) / 2, 0, hoveredImage.position[2]]}>
            <boxGeometry args={[hoverTextBackgoundSize[0], 0, hoverTextBackgoundSize[1]]} />
            <meshBasicMaterial color="gray" transparent opacity={0.8} />
          </mesh>
          <Text 
            position={[hoveredImage.position[0] + ((hoveredImageSide ? -1 : 1) * 0.25), 0, hoveredImage.position[2]]}
            rotation={[-Math.PI / 2, 0, 0]}
            color="black"
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
