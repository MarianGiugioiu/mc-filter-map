import { useEffect, useState } from "react";
import { ItemsMap } from './ItemsMap'
import { Canvas } from "@react-three/fiber";

export const MainComponent = () => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };
  return (
    <>
      <div>
        <input 
          type="text" 
          value={searchText} 
          onChange={handleInputChange} 
        />
      </div>
      <Canvas orthographic camera={{ position: [0, 2, 0], zoom: 40, left:5}}>
          <color attach="background" args={["#ececec"]} />
          <ItemsMap searchText={searchText}/>
      </Canvas>
    </>
  )
}
