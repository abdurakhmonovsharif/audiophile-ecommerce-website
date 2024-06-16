import React from 'react';
import ButtonOrange from '/src/components/shared/buttons/Button-Orange.jsx';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className='hero bg-heroMobile bg-cover bg-bottom bg-no-repeat md:bg-heroTablet xl:bg-heroDesktop xl:bg-bottom-center pb-[110px] md:pb-[167px]'>
      <div className='container mx-auto max-w-[1110px]'>
        <div className='flex flex-col items-center text-center lg:text-left lg:items-start mx-auto max-w-[328px] md:max-w-[379px] lg:max-w-[398px] lg:mx-0'>
          <p className='text-gray tracking-[10px] uppercase mt-[108px] md:mt-[126px] mb-4'>
            New Product
          </p>
          <h1 className='text-h1-mobile md:text-h1 uppercase text-pureWhite mb-6 md:mb-10'>
            XX99 MARK II Headphones
          </h1>
          <p className='text-body text-lightGray mb-7'>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>

          <ButtonOrange to='/products/xx99-mark-two-headphones'>
            See Product
          </ButtonOrange>
        </div>
      </div>
    </section>
  );
}

export default Hero;
