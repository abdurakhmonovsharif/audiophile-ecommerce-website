import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollToTop from '../scroll-utils/ScrollToTop';

function ButtonOrange({ to, children }) {
  return (
    <Link to={to}>
      <motion.button
        className='bg-brightOrange hover:bg-brightOrangeHover transition-colors duration-300 uppercase text-subtitle text-pureWhite px-[30px] py-[15px] md:max-w-[160px]'
        whileHover={{ scale: 1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
        onClick={ScrollToTop}>
        {children}
      </motion.button>
    </Link>
  );
}

export default ButtonOrange;
