import React from 'react';

function About() {
  return (
    <section className='container mx-auto max-w-[327px] md:max-w-[689px] lg:max-w-[1110px] mb-[120px] flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-[125px]'>
      <div className='text-center lg:text-left max-w-[573px] mx-auto lg:place-self-center'>
        <h2 className='uppercase text-h4 mb-8 md:text-h2'>
          Bringing you the <span className='text-brightOrange'>best</span> audio
          gear
        </h2>
        <p className='text-body opacity-50'>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className='mx-auto'>
        <img
          className='rounded-lg md:hidden'
          src='/assets/shared/mobile/image-best-gear.jpg'
          alt='man wearing headphones listening to music'
        />
        <img
          className='hidden md:block lg:hidden rounded-lg'
          src='/assets/shared/tablet/image-best-gear.jpg'
          alt='man wearing headphones listening to music'
        />
        <img
          className='hidden lg:block rounded-lg'
          src='/assets/shared/desktop/image-best-gear.jpg'
          alt='man wearing headphones listening to music'
        />
      </div>
    </section>
  );
}

export default About;
