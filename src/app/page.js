"use client"
import Magnetic from "@/app/components/Magnetic"
import CountUp from "./components/CountUp";
import Button from "@/app/components/Button"
import EntranceAnimation from "./components/Animations/Entrance";
import { useState } from 'react';

import Modal from "@/app/components/Drawer/Modal"

export default function Home() {

  const [parentModalOpen, setParentModalOpen] = useState(false);
  const [childModalOpen, setChildModalOpen] = useState(false);
  const [grandchildModalOpen, setGrandchildModalOpen] = useState(false);
  const [parentModalZIndex, setParentModalZIndex] = useState(50);

  const openParentModal = () => {
    setParentModalOpen(true);
  };

  const closeParentModal = () => {
    setParentModalOpen(false);
  };

  const openChildModal = () => {
    setChildModalOpen(true);
  };

  const closeChildModal = () => {
    setChildModalOpen(false);
  };

  const openGrandchildModal = () => {
    setGrandchildModalOpen(true);
  };

  const closeGrandchildModal = () => {
    setGrandchildModalOpen(false);
  };

  const stackParentModal = (childZIndex) => {
    // Increase the z-index of the parent modal to stack on top of its child modal
    setParentModalZIndex(childZIndex + 1);
  };
  return (
    <div className="w-10/12 mx-auto ">
     <Magnetic>
      <button>Magnetic</button>
     </Magnetic>
     <div className="flex justify-center items-center h-screen">
      <button onClick={openParentModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Open Parent Modal
      </button>
      <Modal isOpen={parentModalOpen} onClose={closeParentModal} stackParentModal={stackParentModal} zIndex={parentModalZIndex}>
        <h1 className="text-lg font-bold mb-4">Parent Modal Content</h1>
        <p>This is the content of the parent modal.</p>
        <button onClick={openChildModal} className="mt-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">
          Open Child Modal
        </button>
      </Modal>
      <Modal isOpen={childModalOpen} onClose={closeChildModal} stackParentModal={stackParentModal} zIndex={parentModalZIndex + 1}>
        <h1 className="text-lg font-bold mb-4">Child Modal Content</h1>
        <p>This is the content of the child modal.</p>
        <button onClick={openGrandchildModal} className="mt-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">
          Open Grandchild Modal
        </button>
        <button onClick={closeChildModal} className="mt-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">
          Close Child Modal
        </button>
      </Modal>
      <Modal isOpen={grandchildModalOpen} onClose={closeGrandchildModal} stackParentModal={stackParentModal} zIndex={parentModalZIndex + 2}>
        <h1 className="text-lg font-bold mb-4">Grandchild Modal Content</h1>
        <p>This is the content of the grandchild modal.</p>
        <button onClick={closeGrandchildModal} className="mt-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">
          Close Grandchild Modal
        </button>
      </Modal>
    </div>
     <div className="">
                Counting from <CountUp start={0} end={1000} duration={5.5}  /> to{' '}
              
            </div>
            <div className="flex  flex-wrap gap-5 items-center">
              <Button.Shine title="Shine" />
              <Button.Center title="Center" />
              <Button.Dotted title="Dotted" />
              <Button.Curtain title="Curtain" />
              <Button.Circle title="Circle" />
              <Button.Hide title="Hide" />
              <Button.Swipe title="Swipe" />
              <Button.Smoosh title="Smoosh" />
              <Button.Slide title="Slide" />
              <Button.Skew title="Skew" />
             
             

             

            </div>

            <div className="">
           <div className="h-screen">
           <EntranceAnimation duration={1} delay={0.5} distance={50} direction="left">
        <p>This content will animate in from the left.</p>
      </EntranceAnimation>
           </div>
           <div className="h-screen">
      <EntranceAnimation duration={1} delay={0.5} distance={50} direction="right">
        <p>This content will animate in from the right.</p>
      </EntranceAnimation>
      </div>
      <div className="h-screen">
      <EntranceAnimation duration={1} delay={0.5} distance={50} direction="up">
        <p>This content will animate in from the top.</p>
      </EntranceAnimation>
      </div>
      <div className="h-screen">
      <EntranceAnimation duration={1} delay={0.5} distance={50} direction="down">
        <p>This content will animate in from the bottom.</p>
      </EntranceAnimation>
      </div>
            </div>
    </div>
  );
}
