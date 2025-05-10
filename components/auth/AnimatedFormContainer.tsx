'use client';

import { motion, AnimatePresence} from 'framer-motion';
import { ReactNode } from 'react';
import React from 'react'

interface AnimatedFormContainerProps {
    children: ReactNode;
    isVisible: boolean;
    direction?: 'left' | 'right';
}


export const AnimatedFormContainer: React.FC<AnimatedFormContainerProps> = ({
    children,
    isVisible,
    direction = 'right'
}) => {
  return (
    <AnimatePresence mode='wait'>
      {isVisible && (
        <motion.div
            initial={{
                opacity: 0,
                x: direction === 'right' ? 100 : -100,
                scale: 0.95
            }}
            animate={{
                opacity: 1,
                x: 0,
                scale: 1
            }}
            exit={{
                opacity: 0,
                x: direction === 'right' ? -100 : 100,
                scale: 0.95
            }}
            transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30,
                mass: 1
            }}
            className='w-full'
        >
            {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
