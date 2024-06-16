import React from 'react';

function ProductTitleHeader({ title }) {
  return (
    <div className='bg-pureBlack mb-16 lg:mb-40'>
      <h1 className='text-pureWhite uppercase text-center py-8 md:py-24 text-h4 md:text-h2'>
        {title}
      </h1>
    </div>
  );
}

export default ProductTitleHeader;
