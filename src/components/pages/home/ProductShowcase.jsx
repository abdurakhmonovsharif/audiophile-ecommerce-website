import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ButtonBlack from '/src/components/shared/buttons/Button-Black.jsx';
import ButtonTransparent from '/src/components/shared/buttons/Button-Transparent.jsx';

function ProductMain() {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <motion.div
      className='bg-brightOrange bg-patternCircles bg-cover md:bg-auto bg-[center_bottom_10rem] md:bg-[center_bottom] lg:bg-auto lg:bg-[left_-14rem_top_-4rem] bg-no-repeat flex flex-col items-center rounded-lg text-center pb-[55px] md:pb-[64px] lg:grid lg:grid-cols-2 lg:text-left lg:pb-[124px] lg:pt-[133px] lg:gap-[138px] overflow-hidden'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}>
      <div className='relative z-0'>
        <img
          className='w-1/2 mt-[55px] mb-8 mx-auto md:hidden'
          src='/assets/home/mobile/image-speaker-zx9.png'
          alt='zx-9 speaker'
        />
        <img
          className='w-1/3 mt-[55px] mb-8 mx-auto hidden md:block lg:hidden'
          src='/assets/home/tablet/image-speaker-zx9.png'
          alt='zx-9 speaker'
        />
        <img
          className='absolute -z-10 bottom-0 left-1/2 transform -translate-x-1/2 w-9/12 -mb-[280px] hidden lg:block'
          src='/assets/home/desktop/image-speaker-zx9.png'
          alt='zx-9 speaker'
        />
      </div>
      <motion.div variants={fadeInUp} className='mt-8 md:mt-0'>
        <h3 className='text-h3 md:text-h1 text-pureWhite uppercase mb-6'>
          ZX9<br></br> Speaker
        </h3>
        <p className='text-body text-pureWhite opacity-75 mb-6 max-w-[349px]'>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <ButtonBlack to={`/products/zx9-speaker`}>See product</ButtonBlack>
      </motion.div>
    </motion.div>
  );
}

function ProductSecondary() {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <motion.div
      className='bg-zx7-mobile bg-cover bg-no-repeat md:bg-zx7-tablet lg:bg-zx7-desktop rounded-lg'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}>
      <div className='ml-6 lg:ml-[96px] py-[101px]'>
        <motion.h4
          variants={fadeInUp}
          className='text-h4 text-pureBlack uppercase mb-6'>
          ZX7 Speaker
        </motion.h4>
        <motion.div variants={fadeInUp}>
          <ButtonTransparent to={`/products/zx7-speaker`}>
            See Product
          </ButtonTransparent>
        </motion.div>
      </div>
    </motion.div>
  );
}

function ProductAdditional() {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <motion.div
      className='flex flex-col md:grid md:grid-cols-2 md:grid-auto-rows gap-[11px]'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}>
      <motion.div
        variants={fadeInUp}
        className='rounded-lg overflow-hidden mb-6 h-full'>
        <img
          className='md:hidden'
          src='/assets/home/mobile/image-earphones-yx1.jpg'
          alt='yx1 earphones'
        />
        <img
          className='hidden md:block lg:hidden h-full w-full object-fit'
          src='/assets/home/tablet/image-earphones-yx1.jpg'
          alt='yx1 earphones'
        />
        <img
          className='hidden lg:block h-full w-full object-fit'
          src='/assets/home/desktop/image-earphones-yx1.jpg'
          alt='yx1 earphones'
        />
      </motion.div>
      <motion.div
        variants={fadeInUp}
        className='bg-paleSilver py-[41px] md:py-[101px] rounded-lg'>
        <div className='ml-6 lg:ml-[96px]'>
          <h4 className='text-h4 mb-6'>YX1 Earphones</h4>
          <ButtonTransparent to={`/products/yx1-earphones`}>
            See Product
          </ButtonTransparent>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProductCategoryHome() {
  return (
    <section className='container mx-auto flex flex-col gap-6 mb-[120px] max-w-[328px] md:max-w-[689px] lg:max-w-[1110px] '>
      <AnimatePresence>
        <motion.div
          key='product-main'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}>
          <ProductMain></ProductMain>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          key='product-secondary'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}>
          <ProductSecondary></ProductSecondary>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          key='product-additional'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}>
          <ProductAdditional></ProductAdditional>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

export default ProductCategoryHome;
