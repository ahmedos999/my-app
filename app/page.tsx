"use client"

import Modal from "./components/Modal";
import { useState } from "react";
import Navbar from "./components/Navbar";

export default function Home() {


  const [showModal,setShowModal] = useState<boolean>(false)

  const closeModal = ()=>{
    setShowModal(false)
  }
  return (
    <div>
      <Navbar></Navbar>
    <main className="flex min-h-screen flex-col items-center justify-center p-24 ">
      <button onClick={()=>setShowModal(true)} className=" bg-white py-2 px-8 rounded text-slate-800 font-bold">Click me</button>
      {showModal && <Modal closeModal={closeModal}></Modal>}
    </main>
    </div>
    
  );
}
