import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import OrderConfirmationModal from '../shared/cart/OrderConfirmationModal';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { motion } from 'framer-motion';

const Backdrop = ({ onClick }) => (
  <motion.div
    className='fixed inset-0 bg-black opacity-40 z-40'
    onClick={onClick}
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.4 }}
    exit={{ opacity: 0 }}
  />
);

const Checkout = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [showOrderConfirmationModal, setShowOrderConfirmationModal] =
    useState(false);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [paymentMethod, setPaymentMethod] = useState('eMoney');

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const totalPrice = cartItems.reduce(
    (accumulator, current) => accumulator + current.price * current.quantity,
    0
  );

  const VAT = Math.floor((totalPrice / 100) * 20);

  const grandTotal = totalPrice + 50;

  const onSubmit = () => {
    setShowOrderConfirmationModal(true);
  };

  return (
    <div className='bg-paleGray pb-24'>
      {showOrderConfirmationModal && (
        <Backdrop
          onClick={() => setShowOrderConfirmationModal(false)}
          showBlur={true}
        />
      )}
      <div className='container mx-auto pt-4 md:pt-8 mb-6 lg:pt-20 lg:mb-14 md:max-w-[689px] lg:max-w-[1110px] opacity-50'>
        <a
          className=' cursor-pointer text-body hover:underline'
          onClick={() => navigate(-1)}>
          Go Back
        </a>
      </div>

      <form className='mx-2 flex flex-col lg:flex-row lg:gap-[30px] lg:mx-auto lg:max-w-[1110px] lg:px-2'>
        <div className='container mx-auto max-w-[327px] md:max-w-[689px] lg:max-w-[730px] bg-white px-6 pt-6 pb-8 rounded-lg mb-8 lg:mb-[141px]'>
          <h2 className='text-h4 uppercase mb-8'>Checkout</h2>
          <h3 className='text-brightOrange text-subtitle uppercase mb-4'>
            Billing Details
          </h3>
          <div className='flex flex-col gap-6 mb-8 md:grid md:grid-cols-2'>
            <div className='flex flex-col gap-2'>
              <div className='flex justify-between'>
                <label className='text-[12px] font-bold'>Name</label>
                {errors.name?.type === 'required' && (
                  <p className='text-error text-[12px]'>
                    This field is required
                  </p>
                )}
              </div>
              <input
                className={`border rounded-lg focus:outline-none pl-4 py-2 placeholder:text-[14px] ${
                  errors.name ? 'border-red-500' : 'border-silver'
                }`}
                placeholder='Alexei Ward'
                {...register('name', { required: true })}
              />
            </div>
            <div className='flex flex-col gap-2'>
              <div className='flex justify-between'>
                <label className='text-[12px] font-bold'>Email Address</label>
                {errors.email?.type === 'required' && (
                  <p className='text-error text-[12px]'>
                    This field is required
                  </p>
                )}
                {errors.email?.type === 'pattern' && (
                  <p className='text-error text-[12px]'>Wrong format</p>
                )}
              </div>
              <input
                className={`border rounded-lg focus:outline-none pl-4 py-2 placeholder:text-[14px] ${
                  errors.email ? 'border-red-500' : 'border-silver'
                }`}
                placeholder='alexei@mail.com'
                {...register('email', {
                  required: true,
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                })}
              />
            </div>
            <div>
              <div className='flex flex-col gap-2'>
                <div className='flex justify-between'>
                  <label className='text-[12px] font-bold'>Phone</label>
                  {errors.phone?.type === 'required' && (
                    <p className='text-error text-[12px]'>
                      This field is required
                    </p>
                  )}
                </div>
                <input
                  className={`border rounded-lg focus:outline-none pl-4 py-2 placeholder:text-[14px] ${
                    errors.phone ? 'border-red-500' : 'border-silver'
                  }`}
                  placeholder='+1 202-555-0136'
                  {...register('phone', { required: true })}
                />
              </div>
            </div>
          </div>
          <h3 className='text-brightOrange text-subtitle uppercase mb-4'>
            Shipping Info
          </h3>
          <div className='flex flex-col gap-6 mb-8'>
            <div className='flex flex-col gap-2'>
              <div className='flex justify-between'>
                <label className='text-[12px] font-bold'>Your Address</label>
                {errors.address?.type === 'required' && (
                  <p className='text-error text-[12px]'>
                    This field is required
                  </p>
                )}
              </div>
              <input
                className={`border rounded-lg focus:outline-none pl-4 py-2 placeholder:text-[14px] ${
                  errors.address ? 'border-red-500' : 'border-silver'
                }`}
                placeholder='1137 Williams Avenue'
                {...register('address', { required: true })}
              />
            </div>
            <div className='flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-6'>
              <div className='flex flex-col gap-2'>
                <div className='flex justify-between'>
                  <label className='text-[12px] font-bold'>Zip Code</label>
                  {errors.name?.type === 'required' && (
                    <p className='text-error text-[12px]'>
                      This field is required
                    </p>
                  )}
                </div>
                <input
                  className={`border rounded-lg focus:outline-none pl-4 py-2 placeholder:text-[14px] ${
                    errors.zipCode ? 'border-red-500' : 'border-silver'
                  }`}
                  placeholder='10001'
                  {...register('zipCode', { required: true })}
                />
              </div>
              <div className='flex flex-col gap-2'>
                <div className='flex justify-between'>
                  <label className='text-[12px] font-bold'>City</label>
                  {errors.name?.type === 'required' && (
                    <p className='text-error text-[12px]'>
                      This field is required
                    </p>
                  )}
                </div>
                <input
                  className={`border rounded-lg focus:outline-none pl-4 py-2 placeholder:text-[14px] ${
                    errors.city ? 'border-red-500' : 'border-silver'
                  }`}
                  placeholder='New York'
                  {...register('city', { required: true })}
                />
              </div>
              <div className='flex flex-col gap-2'>
                <div className='flex justify-between'>
                  <label className='text-[12px] font-bold'>Country</label>
                  {errors.country?.type === 'required' && (
                    <p className='text-error text-[12px]'>
                      This field is required
                    </p>
                  )}
                </div>
                <input
                  className={`border rounded-lg focus:outline-none pl-4 py-2 placeholder:text-[14px] ${
                    errors.address ? 'border-red-500' : 'border-silver'
                  }`}
                  placeholder='United States'
                  {...register('country', { required: true })}
                />
              </div>
            </div>
          </div>
          <h3 className='text-brightOrange text-subtitle uppercase mb-4'>
            Payment Details
          </h3>
          <div className='md:grid md:grid-cols-2'>
            <h2 className='font-bold text-[12px]'>Payment Method</h2>
            <div>
              <div className='flex flex-col'>
                <div className='md:-mt-4'>
                  <input
                    type='radio'
                    id='eMoney'
                    value='eMoney'
                    {...register('paymentMethod')}
                    checked={paymentMethod === 'eMoney'}
                    onChange={handlePaymentMethodChange}
                  />
                  <label
                    htmlFor='eMoney'
                    className='cursor-pointer text-[14px] border border-silver flex items-center truncate font-semibold rounded-lg py-2 pl-[52px]'>
                    e-Money
                  </label>
                </div>
              </div>
              <div>
                <input
                  type='radio'
                  id='cashOnDelivery'
                  value='cashOnDelivery'
                  {...register('paymentMethod')}
                  checked={paymentMethod === 'cashOnDelivery'}
                  onChange={handlePaymentMethodChange}
                />
                <label
                  htmlFor='cashOnDelivery'
                  className='cursor-pointer text-[14px] border border-silver flex items-center truncate font-semibold rounded-lg py-2 pl-[52px]'>
                  Cash On Delivery
                </label>
              </div>
            </div>
          </div>
          {errors.paymentMethod && <p>{errors.paymentMethod.message}</p>}
          {paymentMethod === 'eMoney' && (
            <motion.div
              className='mt-8 flex flex-col gap-6 md:grid md:grid-cols-2'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}>
              <div className='flex flex-col gap-2'>
                <div className='flex justify-between'>
                  <label className='text-[12px] font-bold'>
                    e-Money Number
                  </label>
                  {errors.eMoneyNumber && (
                    <p className='text-error text-[12px]'>
                      This field is required
                    </p>
                  )}
                </div>
                <input
                  className={`border rounded-lg focus:outline-none pl-4 py-2 placeholder:text-[14px] ${
                    errors.eMoneyNumber ? 'border-red-500' : 'border-silver'
                  }`}
                  placeholder='238521993'
                  {...register('eMoneyNumber', { required: true })}
                />
              </div>
              <div className='flex flex-col gap-2'>
                <div className='flex justify-between'>
                  <label className='text-[12px] font-bold'>e-Money Pin</label>
                  {errors.eMoneyPin && (
                    <p className='text-error text-[12px]'>
                      This field is required
                    </p>
                  )}
                </div>
                <input
                  className={`border rounded-lg focus:outline-none pl-4 py-2 placeholder:text-[14px] ${
                    errors.eMoneyPin ? 'border-red-500' : 'border-silver'
                  }`}
                  placeholder='6891'
                  {...register('eMoneyPin', { required: true })}
                />
              </div>
            </motion.div>
          )}
          <div className='hidden lg:flex lg:items-center lg:justify-between lg:gap-8 lg:mt-[30px]'>
            <img
              className='w-[48px] h-[48px]'
              src='/assets/checkout/icon-cash-on-delivery.svg'
              alt=''
            />
            <p className='text-body opacity-50'>
              The ‘Cash on Delivery’ option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </p>
          </div>
        </div>
        <div className='container mx-auto max-w-[327px] md:max-w-[689px] lg:max-w-[350px] lg:h-1/2 bg-white px-6 pt-6 pb-8 rounded-lg'>
          <h3 className='text-h6 uppercase mb-8'>Summary</h3>
          <div className='flex flex-col gap-6'>
            <div>
              <div className='cart-items flex flex-col gap-6 mb-8'>
                {cartItems.map((item) => (
                  <div
                    className='cart-item flex justify-between gap-4 items-center'
                    key={item.id}>
                    <div className='flex items-center gap-4'>
                      <div className='cart-item-image'>
                        <img
                          className='rounded-lg max-w-[64px]'
                          src={item.image.cart}
                          alt={item.name}
                        />
                      </div>
                      <div className='cart-item-details'>
                        <h3 className='cart-item-title text-mobileMenu mb-1'>
                          {item.name
                            .replace(/(headphones|speaker|earphones)/i, '')
                            .replace(/(mark)/i, 'MK')
                            .replace(/(wireless)/i, '')
                            .trim()}
                        </h3>
                        <div className='cart-item-price text-mobileMenu opacity-50'>
                          ${item.price}
                        </div>
                      </div>
                    </div>
                    <div className='opacity-50 font-extrabold'>
                      x{item.quantity}
                    </div>
                  </div>
                ))}
              </div>
              <div className='flex flex-col gap-2'>
                <div className='flex justify-between items-center'>
                  <p className='text-body opacity-50 uppercase'>Total</p>
                  <span className='text-h6'>$ {totalPrice}</span>
                </div>
                <div className='flex justify-between items-center'>
                  <p className='text-body opacity-50 uppercase'>Shipping</p>
                  <span className='text-h6'>$ 50</span>
                </div>

                <div className='flex justify-between items-center'>
                  <p className='text-body opacity-50 uppercase'>
                    VAT (Included)
                  </p>
                  <span className='text-h6'>$ {VAT}</span>
                </div>
                <div className='flex justify-between items-center mt-4'>
                  <p className='text-body opacity-50 uppercase'>Grand total</p>
                  <span className='text-h6 text-brightOrange'>
                    $ {grandTotal}
                  </span>
                </div>
              </div>
            </div>

            <motion.button
              className='bg-brightOrange hover:bg-brightOrangeHover transition-colors duration-300 uppercase text-subtitle text-pureWhite py-[15px]'
              whileHover={{ scale: 1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={handleSubmit(onSubmit)}>
              Continue & Pay
            </motion.button>
          </div>
        </div>
      </form>
      {showOrderConfirmationModal && (
        <>
          <Backdrop />
          <OrderConfirmationModal cartItems={cartItems} />
        </>
      )}
    </div>
  );
};
export default Checkout;
