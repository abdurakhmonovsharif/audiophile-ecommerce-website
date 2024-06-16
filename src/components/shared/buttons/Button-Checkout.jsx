import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function ButtonCheckout() {
  return (
    <Link to={'./checkout'}>
      <motion.button
        className='w-full bg-brightOrange hover:bg-brightOrangeHover transition-colors duration-300 uppercase text-subtitle text-pureWhite px-[30px] py-[15px]'
        whileHover={{ scale: 1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}>
        Checkout
      </motion.button>
    </Link>
  );
}

export default ButtonCheckout;
