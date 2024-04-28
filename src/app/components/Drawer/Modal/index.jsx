"use client"

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Modal = ({ isOpen, onClose, children, stackParentModal }) => {
  const [zIndex, setZIndex] = useState(50);

  useEffect(() => {
    if (isOpen) {
      stackParentModal(zIndex);
      setZIndex(prevZIndex => prevZIndex + 1);
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50"
          style={{ zIndex }}
        >
          <div className="bg-white p-6 rounded shadow-lg relative">
            <button onClick={onClose} className="absolute top-0 right-0 m-2 text-gray-500 hover:text-gray-700">
              &#10005;
            </button>
            {children}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Modal;
