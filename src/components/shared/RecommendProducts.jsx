import React from 'react';
import ButtonOrange from './buttons/Button-Orange';
import products from '../../data/data.json';

const RecommendProducts = () => {
  // Get 3 random products
  const randomProducts = [];

  while (randomProducts.length < 3) {
    const randomIndex = Math.floor(Math.random() * products.length);
    const randomProduct = products[randomIndex];

    // Make sure the same product isn't recommended more than once
    if (!randomProducts.includes(randomProduct)) {
      randomProducts.push(randomProduct);
    }
  }

  return (
    <section className='container mx-auto text-center mb-[120px] lg:mb-[120px] lg:max-w-[1110px]'>
      <h3 className='uppercase text-h5 md:text-h3 mb-8'>You May Also Like</h3>
      <div className=' flex flex-col gap-14 md:grid md:grid-cols-3 md:gap-[11px]'>
        {randomProducts.map((product) => (
          <div className='flex flex-col gap-8 justify-between' key={product.id}>
            {/* images */}
            <div>
              <img
                className='rounded-lg mx-auto w-1/2 object-cover md:hidden'
                src={`../../../${product.image.mobile}`}
                alt=''
              />
              <img
                className='rounded-lg mx-auto max-h-[318px] object-cover hidden md:block lg:hidden'
                src={`../../../${product.image.tablet}`}
                alt=''
              />
              <img
                className='rounded-lg mx-auto object-cover hidden lg:block'
                src={`../../../${product.image.desktop}`}
                alt=''
              />
            </div>
            <h5 className='text-h5'>{product.name}</h5>
            <div>
              <ButtonOrange to={`/products/${product.slug}`}>
                See Product
              </ButtonOrange>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecommendProducts;
