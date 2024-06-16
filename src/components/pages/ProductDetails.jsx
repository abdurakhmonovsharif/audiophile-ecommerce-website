import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AddToCart from '../shared/buttons/AddToCart';
import products from '../../data/data.json';
import RecommendProducts from '../shared/RecommendProducts';
import ProductCategory from '../shared/ProductCateogry';
import { useState } from 'react';

const ProductDetails = ({ setCartItemCount }) => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const product = products.find((product) => product.slug === slug);

  const [cartItems, setCartItems] = useState([]);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <div>
        <div className='container mx-auto mt-4 md:mt-8 mb-6 lg:mt-20 lg:mb-14 md:max-w-[689px] lg:max-w-[1110px] opacity-50'>
          <a
            className='cursor-pointer text-body hover:underline'
            onClick={() => navigate(-1)}>
            Go Back
          </a>
        </div>
        <div className='container mx-auto flex flex-col gap-8 md:max-w-[689px] md:grid md:grid-cols-2 lg:max-w-[1110px] md:gap-[69px] lg:gap-32 md:items-center md:mb-[120px]'>
          <div>
            <img
              className='mx-auto rounded-lg md:hidden'
              src={`/${product.image.mobile}`}
              alt=''
            />
            <img
              className='mx-auto w-full h-auto object-cover rounded-lg hidden md:block lg:hidden'
              src={`/${product.image.tablet}`}
              alt=''
            />
            <img
              className='mx-auto rounded-lg hidden lg:block'
              src={`/${product.image.desktop}`}
              alt=''
            />
          </div>
          <div className='mx-auto flex flex-col gap-6 mb-[88px] md:mb-0'>
            <h6 className='text-newProduct uppercase text-brightOrange'>
              {product.new && 'New Product'}
            </h6>

            <h3 className='text-h4 md:text-h2 uppercase  lg:mx-0 lg:w-full'>
              {product.name}
            </h3>
            <p className='text-body opacity-50 md:max-w-[572px]'>
              {product.description}
            </p>
            <h6 className='text-h6'>${product.price}</h6>
            <AddToCart
              product={product}
              cartItems={cartItems}
              setCartItems={setCartItems}
              setCartItemCount={setCartItemCount}
            />
          </div>
        </div>
        <div className='container mx-auto lg:flex lg:gap-[125px] lg:max-w-[1110px]'>
          <div className='container mx-auto mb-[88px] md:max-w-[689px] lg:max-w-[1110px]'>
            <h2 className='uppercase text-h5 md:text-h3 mb-6'>Features</h2>
            <p className='text-body opacity-50'>{product.features}</p>
          </div>
          <div className='container mx-auto mb-[88px] md:mb-[120px] md:max-w-[689px] lg:max-w-[1110px] md:grid md:grid-cols-2 lg:flex lg:flex-col'>
            <h3 className='uppercase text-h5 md:text-h3 mb-6'>In the box</h3>
            <ul className='flex flex-col gap-2'>
              {product.includes.map((item, index) => (
                <li key={index} className='flex items-center gap-6'>
                  <span className='text-mobileMenu text-brightOrange'>
                    {item.quantity}
                  </span>
                  <span className='text-body opacity-50'>{item.item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='container mx-auto flex flex-col gap-5 md:grid-rows-1 mb-[120px] md:max-w-[689px] lg:max-w-[1110px] md:grid md:grid-cols-[1fr,1.45fr] md:gap-5'>
          <div className='flex flex-col justify-between gap-5'>
            <div>
              <img
                className='rounded-lg md:hidden'
                src={`/${product.gallery.first.mobile}`}
                alt=''
              />
              <img
                className='rounded-lg hidden md:block lg:hidden'
                src={`/${product.gallery.first.tablet}`}
                alt=''
              />
              <img
                className='rounded-lg hidden lg:block'
                src={`/${product.gallery.first.desktop}`}
                alt=''
              />
            </div>
            <div className='img2'>
              <img
                className='rounded-lg md:hidden'
                src={`/${product.gallery.second.mobile}`}
                alt=''
              />
              <img
                className='rounded-lg hidden md:block lg:hidden'
                src={`/${product.gallery.second.tablet}`}
                alt=''
              />
              <img
                className='rounded-lg hidden lg:block'
                src={`/${product.gallery.second.desktop}`}
                alt=''
              />
            </div>
          </div>
          <div>
            <img
              className='rounded-lg md:hidden'
              src={`/${product.gallery.third.mobile}`}
              alt=''
            />
            <img
              className='rounded-lg hidden md:block lg:hidden'
              src={`/${product.gallery.third.tablet}`}
              alt=''
            />
            <img
              className='rounded-lg hidden lg:block'
              src={`/${product.gallery.third.desktop}`}
              alt=''
            />
          </div>
        </div>
      </div>
      <RecommendProducts></RecommendProducts>
      <ProductCategory></ProductCategory>
    </div>
  );
};

export default ProductDetails;
