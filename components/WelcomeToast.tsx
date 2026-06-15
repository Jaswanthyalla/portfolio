'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WelcomeToast() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show shortly after loading
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    // Hide after 8 seconds
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 8000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9, x: '-50%' }}
          animate={{ opacity: 1, y: 0, scale: 1, x: '-50%' }}
          exit={{ opacity: 0, y: 20, scale: 0.9, x: '-50%' }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          className="fixed bottom-8 left-1/2 z-[100] px-6 py-3.5 rounded-full flex items-center gap-3"
          style={{
            background: 'rgba(15, 15, 15, 0.95)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(0, 191, 255, 0.3)',
            boxShadow: '0 10px 40px rgba(0, 191, 255, 0.2)'
          }}
        >
          <span className="text-xl animate-bounce">👋</span>
          <span className="text-white text-sm font-medium tracking-wide">
            Welcome to my portfolio! Enjoy exploring.
          </span>
          <button 
            onClick={() => setIsVisible(false)}
            className="ml-3 flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-white/70 hover:text-white hover:bg-white/20 transition-all text-xs"
            aria-label="Close welcome message"
          >
            ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
