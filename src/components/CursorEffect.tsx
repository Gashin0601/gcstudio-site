'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CursorEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const mouseEnterLink = () => setCursorVariant('link');
    const mouseLeaveLink = () => setCursorVariant('default');

    window.addEventListener('mousemove', mouseMove);

    // リンク要素にカーソルエフェクトを追加
    const links = document.querySelectorAll('a, button');
    links.forEach((link) => {
      link.addEventListener('mouseenter', mouseEnterLink);
      link.addEventListener('mouseleave', mouseLeaveLink);
    });

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      links.forEach((link) => {
        link.removeEventListener('mouseenter', mouseEnterLink);
        link.removeEventListener('mouseleave', mouseLeaveLink);
      });
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: 'rgba(37, 99, 235, 0.3)', // neon-blue
      mixBlendMode: 'screen',
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 28,
        mass: 0.5
      }
    },
    link: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: 'rgba(236, 72, 153, 0.3)', // neon-pink
      mixBlendMode: 'screen',
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 28,
        mass: 0.8
      }
    }
  };

  const secondaryVariants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      backgroundColor: 'rgba(16, 185, 129, 0.3)', // neon-green
      mixBlendMode: 'screen',
      transition: {
        type: 'spring',
        stiffness: 800,
        damping: 35,
        mass: 0.3
      }
    },
    link: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      height: 24,
      width: 24,
      backgroundColor: 'rgba(16, 185, 129, 0.5)', // neon-green
      mixBlendMode: 'screen',
      transition: {
        type: 'spring',
        stiffness: 800,
        damping: 35,
        mass: 0.3
      }
    }
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-32 h-32 rounded-full pointer-events-none z-50 opacity-70 blur-xl"
        animate={cursorVariant}
        variants={variants}
      />
      <motion.div
        className="fixed top-0 left-0 w-16 h-16 rounded-full pointer-events-none z-50 opacity-80 blur-md"
        animate={cursorVariant}
        variants={secondaryVariants}
      />
    </>
  );
} 