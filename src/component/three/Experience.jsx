import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import React, { Component } from 'react';
import * as THREE from 'three';
import { angleToRadians } from '../../utils/angle';
import gsap from 'gsap';
import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";

export const FLOOR_HEIGHT = 2.3;
export const NB_FLOORS = 3;

const Experience = () => {


    const ref = useRef();
    const tl = useRef();
    const libraryRef = useRef();
    const atticRef = useRef();
    const scroll = useScroll();
    useFrame(() => {
        // console.log('Scroll:', scroll);
        if (scroll && scroll.offset != null) {
            console.log("yes");
            tl.current.seek(scroll.offset * tl.current.duration());
        }
    });

    useEffect(() => {
        tl.current = gsap.timeline();

        // VERTICAL ANIMATION
        tl.current.to(
            ref.current.position,
            {
                duration: 2,
                y: -FLOOR_HEIGHT * (NB_FLOORS - 1),
            },
            0
        );

        // Office Rotation
        tl.current.to(
            ref.current.rotation,
            { duration: 1, x: 0, y: Math.PI / 6, z: 0 },
            0
        );
        tl.current.to(
            ref.current.rotation,
            { duration: 1, x: 0, y: -Math.PI / 6, z: 0 },
            1
        );

        // Office movement
        tl.current.to(
            ref.current.position,
            {
                duration: 1,
                x: -1,
                z: 2,
            },
            0
        );
        tl.current.to(
            ref.current.position,
            {
                duration: 1,
                x: 1,
                z: 2,
            },
            1
        );

        // LIBRARY FLOOR
        tl.current.from(
            libraryRef.current.position,
            {
                duration: 0.5,
                x: -2,
            },
            0.5
        );
        tl.current.from(
            libraryRef.current.rotation,
            {
                duration: 0.5,
                y: -Math.PI / 2,
            },
            0
        );

        // ATTIC
        tl.current.from(
            atticRef.current.position,
            {
                duration: 1.5,
                y: 2,
            },
            0
        );

        tl.current.from(
            atticRef.current.rotation,
            {
                duration: 0.5,
                y: Math.PI / 2,
            },
            1
        );

        tl.current.from(
            atticRef.current.position,
            {
                duration: 0.5,

                z: -2,
            },
            1.5
        );
    }, []);

    return (
        <>
            {/* <PerspectiveCamera position={[0, 0, 0]} />
            <OrbitControls /> */}
            <group ref={ref}>

                <mesh position={[0, 0, 0]}>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshStandardMaterial color={"#ffffff"} />
                </mesh>

                <mesh position={[0, 1, 0]} ref={libraryRef}>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshStandardMaterial color={"#ffffff"} />
                </mesh>

                <mesh position={[0, 2, 0]} ref={atticRef}>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshStandardMaterial color={"#ffffff"} />
                </mesh>
            </group>
        {/* <Environment preset='forest' background />  */}
            {/* <ambientLight args={["#ffffff", 0.76]} />*/}
        </>
    )

}

export default Experience