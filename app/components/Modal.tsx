import React from 'react';

interface ChildComponentProps {
  closeModal: () => void;
}

const Modal: React.FC<ChildComponentProps> = ({ closeModal }) => {
  return (
    <div className="modal fixed z-50 inset-0 overflow-y-auto">
      <div className="modal-content bg-white p-4 rounded-lg shadow-lg mx-auto mt-10 w-1/2">
        <h2 className="text-xl font-bold mb-4">Modal Title</h2>
        <p>This is a server-side rendered modal.</p>
        <button onClick={closeModal} className="mt-4 p-2 bg-red-500 text-white rounded">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;