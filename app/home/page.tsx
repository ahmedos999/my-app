'use client'
import React, { useRef } from "react"
import { Mesh } from 'three';
import { Canvas,useFrame,useLoader } from "@react-three/fiber"
import {TextureLoader} from 'three/src/loaders/TextureLoader.js'
import {OrbitControls} from '@react-three/drei'




export default function home(){
    return(
        <div className=" h-svh  bg-gray-900">
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

    const mesh = useRef<Mesh | null>(null);
    useFrame((state,delta)=>{
        if(mesh.current){
        mesh.current.rotation.x += delta * 0.25
        mesh.current.rotation.y += delta * 0.25
        mesh.current.rotation.z += delta * 0.25
        }
        
    })

    const texture_1 = useLoader(TextureLoader,"/imgs/tailwind.png")
    const texture_2 = useLoader(TextureLoader,"/imgs/react.png")
    const texture_3 = useLoader(TextureLoader,"/imgs/three.png")
    const texture_4 = useLoader(TextureLoader,"/imgs/motion.png")
    const texture_5 = useLoader(TextureLoader,"/imgs/next.png")
    const texture_6 = useLoader(TextureLoader,"/imgs/ty.png")
    return(
       <mesh ref={mesh}>
        <boxGeometry args={[2.5,2.5,2.5]}></boxGeometry>
        <meshStandardMaterial map={texture_1} attach={"material-0"}></meshStandardMaterial>
        <meshStandardMaterial map={texture_2} attach={"material-1"}></meshStandardMaterial>
        <meshStandardMaterial map={texture_3} attach={"material-2"}></meshStandardMaterial>
        <meshStandardMaterial map={texture_4} attach={"material-3"}></meshStandardMaterial>
        <meshStandardMaterial map={texture_5} attach={"material-4"}></meshStandardMaterial>
        <meshStandardMaterial map={texture_6} attach={"material-5"}></meshStandardMaterial>
       </mesh>
    )
}