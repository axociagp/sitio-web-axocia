import React from 'react';

interface TextRevealProps {
  children: React.ReactNode;
  visible: boolean;
  delay?: string;
  className?: string;
}

export const TextReveal: React.FC<TextRevealProps> = ({ children, visible, delay = "0ms", className = "" }) => (
  <div className={`overflow-hidden ${className}`}>
    <div
      className={`transform transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${visible ? 'translate-y-0' : 'translate-y-[105%]'}`}
      style={{ transitionDelay: delay }}
    >
      {children}
    </div>
  </div>
);