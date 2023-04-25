import React, { useContext, useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";

type ModalProviderProps = {
  children: React.ReactNode;
  onClose?: () => void;
};

const ModalContext = React.createContext<HTMLElement | null>(null);

export function ModalProvider({ children }: ModalProviderProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState<null | HTMLElement>(null);

  useEffect(() => {
    setValue(modalRef.current || null);
  }, []);

  return (
    <>
      <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
      <div ref={modalRef} />
    </>
  );
}

export function Modal({ children, onClose }: ModalProviderProps) {
  const modalNode = useContext(ModalContext);

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "auto";
    };
  }, []);

  if (!modalNode) return null;

  return ReactDOM.createPortal(
    <div className="fixed top-0 right-0 left-0 bottom-0 flex justify-center items-center z-30 h-screen w-screen">
      <motion.div
        className="absolute h-screen w-screen bg-[rgba(0,0,0,0.85)]"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      <div className="z-10">{children}</div>
    </div>,
    modalNode
  );
}
