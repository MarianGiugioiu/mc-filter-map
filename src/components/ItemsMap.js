import { useEffect, useState, useRef } from "react";
import * as THREE from 'three';
import { Environment, Grid, OrbitControls, Image, Text, useHelper, OrthographicCamera, PerspectiveCamera, CameraControls } from "@react-three/drei";
import { useThree, useFrame, extend } from '@react-three/fiber';

export const ItemsMap = (props) => {
  const { selectedOption, items } = props;
  const [hoveredImage, setHoveredImage] = useState(null);
  const [hoveredImageSide, setHoveredImageSide] = useState(0);
  const [hoverTextBackgoundSize, setHoverTextBackgoundSize] = useState([0, 0]);
  const cameraRef = useRef()
  const { camera } = useThree();
  const controlsRef = useRef();
  // useHelper(cameraRef, THREE.CameraHelper)
  const [targetPosition, setTargetPosition] = useState([-2.25, 11.75, 0]);

  function updateHoverTextBackgoundSize(text) {
    const size = text.geometry.boundingBox;
    setHoverTextBackgoundSize([Math.abs(size.min.x - size.max.x), Math.abs(size.min.y - size.max.y)])
  }

  useEffect(() => {
    if (selectedOption && selectedOption.position) {
      setTargetPosition(selectedOption.position)
    }
  }, [selectedOption]);

  return (
    <>
      <Environment preset="sunset"/>
      <ambientLight intensity={0.1} />
      <pointLight position={[10, 10, 10]} />
      <OrthographicCamera makeDefault ref={cameraRef} position={[targetPosition[0], targetPosition[1], 4]} zoom={50}/>
      <OrbitControls ref={controlsRef} target={[targetPosition[0], targetPosition[1], 2]} enableRotate={false}/>
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
                          {/* <Image url={item.imageUrl}
                            position={item.position}
                            scale={[0.5, 0.5, 0.5]}
                            // rotation={[-Math.PI / 2, 0, 0]}
                          /> */}
                          <Text 
                            position={[item.position[0] + (sideIndex ? 1 : -1) * 0.5, item.position[1], item.position[2]]}
                            // rotation={[-Math.PI / 2, 0, 0]}
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
                            <mesh position={[item.position[0] + (sideIndex ? 1 : -1) * 0.75, item.position[1] - 0.5, item.position[2]]}>
                              <boxGeometry args={[2, 0.5, 0.1]} />
                              <meshBasicMaterial color="black"/>
                            </mesh>
                          ) : undefined
                        }
                        {
                          !(itemIndex % 2) ? (
                            <mesh position={[item.position[0] + (sideIndex ? 1 : -1) * 1.25, item.position[1] + 0.25, item.position[2]]}>
                              <boxGeometry args={[1, 1, 0.1]} />
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
          <mesh position={[hoveredImage.position[0] + (hoveredImageSide ? -1 : 1) * (0.5 + hoverTextBackgoundSize[0]) / 2, hoveredImage.position[1], 1]}>
            <boxGeometry args={[hoverTextBackgoundSize[0], hoverTextBackgoundSize[1], 0]} />
            <meshBasicMaterial color="gray" transparent opacity={0.8} />
          </mesh>
          <Text 
            position={[hoveredImage.position[0] + ((hoveredImageSide ? -1 : 1) * 0.25), hoveredImage.position[1], 1]}
            // rotation={[-Math.PI / 2, 0, 0]}
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
