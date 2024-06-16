import React from 'react';
import ButtonOrange from './buttons/Button-Orange';
import { Link } from 'react-router-dom';

const ProductPreviewCard = ({
  slug,
  image,
  name,
  categoryImage,
  description,
  newProduct,
  isReversed,
}) => {
  const productName = name.replace(/(earphones|speaker|headphones)/gi, '');
  const productCategory = name.split(' ').pop();

  return (
    <div
      className={`container mx-auto flex flex-col gap-8 md:max-w-[689px] lg:flex-row lg:max-w-[1110px] lg:gap-32 lg:items-center ${
        isReversed ? 'lg:flex-row-reverse' : ''
      }`}>
      <div className='lg:max-w-[540px]'>
        <img
          className='mx-auto rounded-lg md:hidden'
          src={image.mobile}
          alt={name}
        />
        <img
          className='mx-auto rounded-lg hidden md:block lg:hidden'
          src={image.tablet}
          alt={name}
        />
        <img
          className='mx-auto rounded-lg hidden lg:block'
          src={image.desktop}
          alt={name}
        />
      </div>
      <div className='mx-auto text-center lg:text-left flex flex-col gap-6 lg:max-w-[454px]'>
        {newProduct && (
          <h6 className='text-newProduct uppercase text-brightOrange'>
            New Product
          </h6>
        )}
        <div>
          <h3 className='text-h4 md:text-h2 uppercase md:mx-auto lg:mx-0 lg:w-full'>
            {productName}
          </h3>
          <h3 className='text-h4 md:text-h2 uppercase md:mx-auto lg:mx-0 lg:w-full'>
            {productCategory}
          </h3>
        </div>

        <p className='text-body opacity-50 md:max-w-[572px]'>{description}</p>
        <div>
          <ButtonOrange to={`/products/${slug}`}>See Product</ButtonOrange>
        </div>
      </div>
    </div>
  );
};

export default ProductPreviewCard;
