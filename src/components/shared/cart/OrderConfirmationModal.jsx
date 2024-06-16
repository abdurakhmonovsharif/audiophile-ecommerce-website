import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const OrderConfirmationModal = ({ cartItems }) => {
  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const firstCartItem = cartItems[0];

  return (
    <div className='modal-container'>
      <div className='bg-pureWhite max-w-[327px] md:max-w-[540px] mx-auto px-8 rounded-lg'>
        <img
          className='pt-8 mb-6'
          src='/assets/checkout/icon-order-confirmation.svg'
          alt='checkmark'
        />
        <h3 className='text-h5 uppercase mb-4'>Thank you for your order</h3>
        <p className='text-body opacity-50 mb-6'>
          You will receive an email confirmation shortly.
        </p>
        <div>
          <div className='bg-paleSilver rounded-t p-6 rounded-b'>
            <div className='flex justify-between items-center pb-3 border-b border-lightGray mb-3'>
              <div className='flex gap-4 items-center'>
                <img
                  className='w-[50px] h-[50px] object-fit'
                  src={firstCartItem.image.cart}
                  alt={firstCartItem.name}
                />
                <div className='flex flex-col'>
                  <p className='text-mobileMenu'>
                    {firstCartItem.name
                      .replace(/(headphones|speaker|earphones)/i, '')
                      .replace(/(mark)/i, 'MK')
                      .replace(/(wireless)/i, '')
                      .trim()}
                  </p>
                  <p className='text-mobileMenu opacity-50'>
                    $ {firstCartItem.price}
                  </p>
                </div>
              </div>
              <p className='font-bold opacity-50'>x {firstCartItem.quantity}</p>
            </div>
            {cartItems.length > 1 && (
              <div className='text-center'>
                <p className='text-[12px] font-bold opacity-50'>
                  and {cartItems.length - 1} other item(s)
                </p>
              </div>
            )}
          </div>
          <div className='bg-black px-6 py-4 rounded-b mb-6'>
            <h5 className='opacity-50 text-white uppercase mb-2'>
              Grand Total
            </h5>
            <p className='text-white text-h6'>$ {totalAmount}</p>
          </div>
        </div>
        <motion.button
          className='w-full bg-brightOrange hover:bg-brightOrangeHover transition-colors duration-300 uppercase text-subtitle text-pureWhite py-[15px] mb-8'
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}>
          <Link to='/'>Back To Home</Link>
        </motion.button>
      </div>
    </div>
  );
};

export default OrderConfirmationModal;
