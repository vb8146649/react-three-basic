import React, { Component, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default function Web2d() {
    // const ref = useRef()
    // const parentRef=useRef()
    // const [state, setState] = useState(false);
    // useEffect(() => {
    //     if (state && ref.current) {
    //         console.log('true')
    //         gsap.to(
    //             ref.current, {
    //             x: '50vw',
    //             duration: 3,
    //             ease: 'power1.inOut'
    //         }
    //         )

    //     }
    // }, [state]);
    // useEffect(() => {
    //     if (!state && ref.current) {
    //         console.log("false")
    //         gsap.to(
    //             ref.current, {
    //             x: '0vw',
    //             duration: 3,
    //             ease: 'power1.inOut'
    //         }
    //         )

    //     }
    // }, [state]);
    // const onClick = () => {
    //     if (state) {
    //         setState(false)
    //     } else {
    //         setState(true);
    //     }
    // }
    // useEffect(()=>{
    //     if(ref.current){

        //     }
        // },[ref])
        useEffect(() => {
            // your animation properties
            gsap.to(
                "#ref",
                {
                    
                    x:'500px',
                    rotation: 20,
                    duration: 3,
                    ease: 'none',
                    yoyo:true,
                    scrollTrigger: {
                        trigger: "#ref",
                        scrub: 2,
                        markers: true,
                        start: "top 10%",
                        pin: "#ref",
                        toggleActions: 'play pause resume pause'
                    }
                }
            )
    }, []); // empty dependency array ensures it runs once after component mount
    
    return (
        <>
            <div id='box'>
                hi
            <div id="ref" style={{ width: 200, height: 200, backgroundColor: '#000' }}>
                <button
                //onClick={onClick} 
                >Hello</button>
            </div>
            <div  id='pin'>hello</div>
                </div>
        </>
    )
}
