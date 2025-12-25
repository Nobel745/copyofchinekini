import React, { useEffect, useState } from 'react';

interface Props {
  isLoading: boolean;
}

const TransitionOverlay: React.FC<Props> = ({ isLoading }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setVisible(true);
    } else {
      const timer = setTimeout(() => setVisible(false), 600);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!visible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-primary transition-opacity duration-500 ${
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex flex-col items-center">
        <span className="material-symbols-outlined text-6xl text-white animate-spin">
          radar
        </span>
        <h2 className="mt-4 text-2xl text-white font-bold animate-pulse">চিনেকিনি লোডিং...</h2>
      </div>
    </div>
  );
};

export default TransitionOverlay;
