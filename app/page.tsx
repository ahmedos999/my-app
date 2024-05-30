"use client"

import Modal from "./components/Modal";
import { useState } from "react";

export default function Home() {


  const [showModal,setShowModal] = useState<boolean>(false)

  const closeModal = ()=>{
    setShowModal(false)
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <button onClick={()=>setShowModal(true)} className=" bg-slate-800 py-2 px-8 rounded text-slate-200">Click me</button>
      {showModal && <Modal closeModal={closeModal}></Modal>}
    </main>
    
  );
}
