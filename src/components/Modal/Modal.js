import React from "react";

export default function Modal({ isOpen, setIsOpen, children }) {
  if (!isOpen) return null;
  function handleClose(e) {
    if (e.target.id === "outside") {
      setIsOpen(false);
    }
  }
  return (
    <div
      id="outside"
      className=" inset-0 absolute bg-[rgba(0,0,0,0.7)] flex justify-center items-center p-8"
      onClick={(e) => {
        handleClose(e);
      }}
    >
      <div className="bg-white min-h-96 min-w-96 p-4 rounded-xl">
        {children}
      </div>
    </div>
  );
}
