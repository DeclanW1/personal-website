'use client';
import { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="bg-white border border-black rounded-lg shadow-lg w-[90%] max-w-2xl p-6 relative z-10"
        onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-black hover:text-gray-700 text-xl">
          &times;
        </button>
        <div className="overflow-y-auto max-h-[70vh] text-black">{children}</div>
      </div>

      <div
        className="absolute inset-0 bg-white bg-opacity-0"
        onClick={onClose}
      ></div>
    </div>
  );
}
