
'use client';
import { motion } from 'framer-motion';

const HoverEffect = () => (
    <motion.div
        whileHover={{ scale: 1.1, rotate: 10 }}
        style={{
            height: '100px',
            width: '100px',
            backgroundColor: 'red',
            margin: '50px auto',
        }}
    />
);

export default HoverEffect;
