
import { Canvas } from '@react-three/fiber';

import {OrbitControls} from "@react-three/drei"
import Object from './Object';

function Element3D() {

 return(
   <div className='w-full h-full    bg-black '>
     <Canvas className=" w-12 h-full md:w-24 md:h-72"camera={{fov:36}}>
        <OrbitControls/>
        <ambientLight/>
        <Object/>
    </Canvas>
   </div>
 )
}

export default Element3D