import { OrbitControls , Environment , PerspectiveCamera} from '@react-three/drei';
import React, { Component } from 'react';
import * as THREE from 'three';
import { angleToRadians } from '../../utils/angle';
import { useFrame ,} from '@react-three/fiber';
import Avatar from './Avatar';


export class Home extends Component {
    render() {
        
        return (
            <>
                <PerspectiveCamera makeDefault position={[0, 2, 5]}  />
                <OrbitControls />
                {/* <mesh position={[0,0.5,0]} castShadow>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="#ffffff" />
                </mesh> */}
            {/* Ball */}
            
            <mesh rotation={[-(angleToRadians(90)), 0, 0]} receiveShadow>
                <planeGeometry args={[14, 14]} />
                <meshStandardMaterial color="#1ea3d8" />
            </mesh>
            <Avatar/>
            {/* Ambient light */}
            <spotLight args={["#ffffff", 11, 12, angleToRadians(45), 0.4]} position={[-1, 2, 0]} castShadow />
            <spotLight args={["#ffffff", 11, 12, angleToRadians(45), 0.4]} position={[1, 2, 0]} castShadow />
            <ambientLight args={["#ffffff", 0.76]} />
            <Environment background>
                <mesh >
                    <sphereGeometry args={[50, 100, 100]} />
                    <meshBasicMaterial color={"#2266cc"} side={THREE.BackSide} />
                </mesh>
            </Environment>
            </>
        )
    }
}

export default Home