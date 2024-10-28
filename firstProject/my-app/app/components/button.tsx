"use client"; // This enables the component to run on the client side

import React from 'react';

interface ButtonProps {
  title: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function Button({ title, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className="p-[3px] relative">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
      <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
        {title}
      </div>
    </button>
  );
}
