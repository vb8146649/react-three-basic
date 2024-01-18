import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { angleToRadians } from "../../utils/angle";
import { useFrame} from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from 'three';
import gsap from 'gsap';
let disy = 0.5;
export default function Three() {

    const ballRef = useRef(null);
    const camera=useRef()

    const spotLightRef=useRef(null);
    useEffect(()=>{
        if(spotLightRef.current && text==="Clicked"){
            console.log(spotLightRef);
            const timeline = gsap.timeline({ paused: true });
            timeline.to(spotLightRef.current.position, {
                x: 3,
                duration: 4,
                ease: "none"
            },);
            timeline.to(spotLightRef.current.position, {
                y: 2,
                duration: 2,
                ease: "circ.out"
            },"<");
            timeline.to(spotLightRef.current.position, {
                y: 1,
                duration: 2,
                ease: "circ.in"
            },">");
            timeline.play();
        }
    },[spotLightRef.current])
    // const orbitControlsRef=useRef(null);
    // useFrame((state)=>{
    //     if (orbitControlsRef.current){
    //         const {x,y}=state.mouse
    //         orbitControlsRef.current.setAzimuthalAngle(angleToRadians(x*5));
    //         orbitControlsRef.current.setPolarAngle(angleToRadians(90-y*5));
    //         orbitControlsRef.current.update();
    //     }
    // })
    // useEffect(()=>{
    //     if(orbitControlsRef.current){
    //         console.log(orbitControlsRef)
    //     }
    // }, [orbitControlsRef.current])
    const [text, setText] = useState("notClicked")
    const [text2, setText2] = useState("notClicked")
    // useFrame((state) => {
    //     if (ballRef.current) {
    //         ballRef.current.update();
    //     }
    // })
    useEffect(() => {
        if (ballRef.current && text === "Clicked") {
            // disy=0.5;
            console.log(text);
            const timeline = gsap.timeline({ paused: true });
            disy = disy + 2;
            timeline.to(ballRef.current.position, {
                y: disy,
                duration: 1,
                ease: "power5.inout"
            });
            // timeline.to(ballRef.current.position, {
            //     y: 0.5,
            //     duration: 1,
            //     ease: "bounce.out"
            // }, ">");
            timeline.play();
            setText("notClicked")
        }
    }, [text])
    useEffect(() => {
        if (ballRef.current && text2 === "Clicked") {
            const timeline = gsap.timeline({ paused: true });
            console.log("Clicked2")
            timeline.to(ballRef.current.position, {
                y: 0.5,
                duration: 1,
                ease: "bounce.out"
            }, ">");
            timeline.play();
            setText2("notClicked")
            disy = 0.5;
        }
    }, [text2])
    const onPointerOver = () => {
        setText("Clicked")
    }
    const onPointerOut = () => {
        setText2("Clicked")
    }
    useFrame(() => {
        // Update the camera's lookAt position based on the target position
        if (camera.current) {
          camera.current.lookAt(ballRef.current.position);
        }
    });

    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 1, 5]} ref={camera} />
            {/* Ball */}
            <OrbitControls //ref={orbitControlsRef} 
            />
            <mesh onClick={onPointerOver} position={[0, 0.5, 0]} onPointerOut={onPointerOut} ref={ballRef} castShadow>
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshStandardMaterial color="#ffffff" />
            </mesh>
            {/* Plane */}
            <mesh rotation={[-(angleToRadians(90)), 0, 0]} receiveShadow>
                <planeGeometry args={[14, 14]} />
                <meshStandardMaterial color="#1ea3d8" />
            </mesh>
            {/* Ambient light */}
            <spotLight args={["#ffffff", 11, 12, angleToRadians(45), 0.4]} position={[-3, 1, 0]} castShadow ref={spotLightRef} />
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