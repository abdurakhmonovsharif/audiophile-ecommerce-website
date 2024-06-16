import React, { useState, useEffect } from 'react';
import ButtonCheckout from '../buttons/Button-Checkout';
import { useDispatch } from 'react-redux';
import {
  addItem,
  removeItem,
  updateItemQuantity,
  removeAllItems,
} from '../../../redux/cartSlice';

function Cart({ cartItemCount, setCartItemCount }) {
  const [cartItems, setCartItems] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    if (storedCartItems.length > 0) {
      setCartItems(storedCartItems);
    }
    setCartItemCount(storedCartItems.length);
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    setCartItemCount(cartItems.length);
  }, [cartItems]);

  const handleRemoveAll = () => {
    dispatch(removeAllItems());
    setCartItems([]);
  };

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity === 0) {
      dispatch(removeItem(id));
      setCartItems(cartItems.filter((item) => item.id !== id));
    } else {
      dispatch(updateItemQuantity({ id, quantity: newQuantity }));
      setCartItems(
        cartItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: newQuantity };
          }
          return item;
        })
      );
    }
  };

  const handleIncrement = (id) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      dispatch(updateItemQuantity({ id, quantity: item.quantity + 1 }));
      setCartItems(
        cartItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        })
      );
    }
  };

  const handleDecrement = (id) => {
    const item = cartItems.find((item) => item.id === id);
    if (item && item.quantity > 0) {
      if (item.quantity === 1) {
        dispatch(removeItem(id));
        setCartItems(cartItems.filter((item) => item.id !== id));
      } else {
        dispatch(updateItemQuantity({ id, quantity: item.quantity - 1 }));
        setCartItems(
          cartItems.map((item) => {
            if (item.id === id) {
              return { ...item, quantity: item.quantity - 1 };
            }
            return item;
          })
        );
      }
    }
  };

  const handleCheckout = () => {
    props.history.push({
      pathname: '/checkout',
      state: { cartItems },
    });
  };

  const total = cartItems.reduce(
    (accumulator, item) => accumulator + item.price * item.quantity,
    0
  );

  return (
    <div className='relative'>
      <div className='cart'>
        <div className='container mx-auto'>
          <div className='cart-header flex justify-between mb-8'>
            <h2 className='cart-title text-h6'>Cart ({cartItems.length})</h2>
            <button
              className='underline text-body opacity-50'
              onClick={handleRemoveAll}>
              Remove all
            </button>
          </div>
          {cartItems.length > 0 ? (
            <div className='cart-items flex flex-col gap-6'>
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
                  <div className='flex justify-between gap-4 max-w-[96px]'>
                    <div className='flex gap-[20px] place-items-center bg-paleSilver mx-auto px-2'>
                      <button
                        type='button'
                        className='opacity-25 py-2 focus:outline-none'
                        onClick={() => handleDecrement(item.id)}>
                        -
                      </button>
                      <input
                        className='bg-paleSilver py-2 w-4 text-center focus:outline-none text-subtitle'
                        type='number'
                        min='1'
                        value={item.quantity}
                        onChange={(e) =>
                          handleQuantityChange(
                            item.id,
                            parseInt(e.target.value)
                          )
                        }
                      />
                      <button
                        type='button'
                        className='opacity-25 py-2 focus:outline-none'
                        onClick={() => handleIncrement(item.id)}>
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <div className='cart-total flex justify-between'>
                <span className='uppercase opacity-50 text-body'>Total</span>
                <span className='text-h6'>${total.toFixed(2)}</span>
              </div>
              <div className='mb-8'>
                <ButtonCheckout onClick={handleCheckout}></ButtonCheckout>
              </div>
            </div>
          ) : (
            <div className='cart-empty text-center text-h6 mb-8'>
              Your cart is empty
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
