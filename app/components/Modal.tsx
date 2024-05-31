import React from 'react';

interface ChildComponentProps {
  closeModal: () => void;
}

const Modal: React.FC<ChildComponentProps> = ({ closeModal }) => {
  return (
    <div className="flex justify-center items-center fixed z-50 inset-0 overflow-y-auto bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm">
      <div className="bg-white p-4 rounded-lg shadow-lg w-1/4 h-1/4 flex flex-col justify-between">
        <h2 className="text-xl font-bold mb-4">Popup Menu</h2>
        <p>Hello from the server :)</p>
        <button onClick={closeModal} className=" p-2 bg-slate-800 text-white rounded">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;