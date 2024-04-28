import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Drawer = ({ direction }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={toggleModal}>
        Open Modal
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { ease: "easeInOut", duration: 0.3 } }}
            transition={{ type: "spring", stiffness: 130, damping: 20 }} // Adjust stiffness and damping for a smoother closing animation
            className="fixed top-0 z-50 left-0 right-0 bottom-0 flex justify-center items-center"
          >
            <motion.div
              initial={{ opacity: 0, y: direction === "bottom" ? "100%" : 0, x: direction === "right" ? "100%" : 0 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, y: direction === "bottom" ? "100%" : 0, x: direction === "right" ? "100%" : 0 }}
              transition={{ type: "spring", stiffness: 130, damping: 20 }} // Adjust stiffness and damping for a smoother closing animation
              className={`fixed w-full h-full bg-zinc-600/35 backdrop-blur-sm`}
              onClick={toggleModal} // Close modal on background click
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, y: direction === "bottom" ? "100%" : 0, x: direction === "right" ? "100%" : 0 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, y: direction === "bottom" ? "100%" : 0, x: direction === "right" ? "100%" : 0 }}
              transition={{ type: "spring", stiffness: 130, damping: 20 }} // Adjust stiffness and damping for a smoother closing animation
              className={`bg-white   fixed p-8 ${
                direction === "bottom" ? "bottom-0 w-full min-h-[500px] rounded-t-2xl shadow-lg border border-zinc-300" : ""
              } ${direction === "right" ? "right-0 w-11/12 max-w-4xl h-screen" : ""}`}
            >
              {/* Content of the modal */}
              <h2 className="text-lg font-bold mb-4">Modal Content</h2>
              <p className="text-gray-700 mb-4">This is the modal content.</p>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={toggleModal}>
                Close Modal
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Drawer;
