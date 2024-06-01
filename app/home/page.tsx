'use client'
import React, { useEffect, useRef } from "react"
import { Mesh } from 'three';
import { Canvas,useFrame,useLoader } from "@react-three/fiber"
import {TextureLoader} from 'three/src/loaders/TextureLoader.js'
import {OrbitControls} from '@react-three/drei'
import { useMotionValue,useSpring } from "framer-motion";
import {motion} from 'framer-motion-3d'
import Navbar from "../components/Navbar";




export default function home(){
    return(
        <div className=" h-svh  bg-gray-900">
            <Navbar></Navbar>
            <p className="text-center text-white">Move the Cube</p>
            <Canvas>
                <OrbitControls enableZoom={false} enablePan={false}></OrbitControls>
                <ambientLight intensity={2}></ambientLight>
                <directionalLight position={[2,1,1]}></directionalLight>
                <Cube></Cube>
            </Canvas>
        </div>
    )
}

function Cube(){

    // const mesh = useRef<Mesh | null>(null);
    const mesh =  useRef(null)
    const option ={
        damping:20
    }
    // inital the cube position values
    const mouse = {
        x:useSpring(useMotionValue(-0.4),option),
        y:useSpring(useMotionValue(0.3),option)
    }
    
    // function to set the motion values from the mouse move
    const manageMouseMove = (e:MouseEvent)=>{
        const {innerWidth,innerHeight} = window
        const {clientX,clientY} = e
        const x = -0.5 + clientX/innerWidth
        const y = -0.5 + clientY / innerHeight 

        mouse.x.set(x)
        mouse.y.set(y)
    }

    useEffect(()=>{

        // attach the mouse move function to mouse move event
        window.addEventListener('mousemove',manageMouseMove)

        // dispose the function after leaving page
        return ()=>window.removeEventListener("mousemove",manageMouseMove)
    },[])

    // load texture for each side of the cube with an image 
    const texture_1 = useLoader(TextureLoader,"/imgs/tailwind.jpg")
    const texture_2 = useLoader(TextureLoader,"/imgs/react.png")
    const texture_3 = useLoader(TextureLoader,"/imgs/three.png")
    const texture_4 = useLoader(TextureLoader,"/imgs/motion.png")
    const texture_5 = useLoader(TextureLoader,"/imgs/next.png")
    const texture_6 = useLoader(TextureLoader,"/imgs/ty.png")
    
    return(
       <motion.mesh ref={mesh} rotation-y={mouse.x} rotation-x={mouse.y}>
        <boxGeometry args={[2.5,2.5,2.5]}></boxGeometry>
        <meshStandardMaterial map={texture_1} attach={"material-0"} color={'white'}></meshStandardMaterial>
        <meshStandardMaterial map={texture_2} attach={"material-1"} color={'white'}></meshStandardMaterial>
        <meshStandardMaterial map={texture_3} attach={"material-2"}color={'white'}></meshStandardMaterial>
        <meshStandardMaterial map={texture_4} attach={"material-3"}color={'white'}></meshStandardMaterial>
        <meshStandardMaterial map={texture_5} color={'white'} attach={"material-4"}></meshStandardMaterial>
        <meshStandardMaterial map={texture_6} attach={"material-5"}color={'white'}></meshStandardMaterial>
       </motion.mesh>
    )
}