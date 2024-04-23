import { useEffect, useState } from "react";
import { ItemsMap } from './ItemsMap';
import { SelectComponent } from './SelectComponent';
import { Canvas } from "@react-three/fiber";
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const MainComponent = () => {
  const [items, setItems] = useState(null);
  const [selectOptions, setSelectOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const generateItemPosition = (lane, side, index) =>  {
      const c = Math.floor(index / 8);
      const x = -8.25 + lane * 6 + (side ? 3.5 : 0); 
      const y = 3.75 + 0.5 * index + c / 2;
      return [x, y, 0]
    }
    const convertToTitleCase = (str) => {
      let words = str.split('_');
    
      for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
      }
    
      return words.join(' ');
    }

    const fetchJsonData = async () => {
      try {
        const newitemList = [];
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
                const text = convertToTitleCase(item);
                const newItem = {
                  imageUrl: `/stackable-items/${item}.png`,
                  text,
                  position: generateItemPosition(laneIndex, sideIndex, itemIndex)
                }
                newitemList.push({
                  position: newItem.position,
                  value: item,
                  label: `${text} ( ${laneIndex + 1} ${sideIndex ? 'right': 'left'} ${itemIndex + 1} )`
                });
                return newItem
              })
            })
          })
          setItems(data);
          setSelectOptions(newitemList);
        }
      } catch (error) {
        console.error('Error fetching JSON:', error);
      }
    };

    fetchJsonData();
  }, []);

  return (
    <>
      <div style={{height: '5%'}}>
        <SelectComponent setSelectedOption={setSelectedOption} options={selectOptions}/>
      </div>
      <Canvas style={{height: '95%'}}>
          <color attach="background" args={["#ececec"]} />
          <ItemsMap selectedOption={selectedOption} items={items}/>
      </Canvas>
    </>
  )
}
