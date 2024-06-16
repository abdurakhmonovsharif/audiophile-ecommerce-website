import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ButtonShop from '/src/components/shared/buttons/Button-Shop.jsx';

function MobileNav({ onClose }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    setShowMobileMenu(true);
  }, []);

  function handleClick() {
    setShowMobileMenu(false);
    onClose();
  }

  return (
    <div
      className={`lg:hidden bg-pureWhite mobile-menu ${
        showMobileMenu ? 'active' : 'hidden'
      }`}>
      <ul className='pt-[84px] md:pt-[110px] flex flex-col md:flex-row md:justify-between gap-[100px] md:gap-[10px] md:max-w-[689px] mx-auto items-center lg:hidden pb-8'>
        <li className=''>
          <div className='relative flex flex-col gap-[22px] text-center bg-paleSilver rounded-lg px-[110px] md:px-[54px] pt-[88px] pb-[22px] mx-auto'>
            <img
              className='w-1/2 h-auto absolute top-[20px] left-1/2 transform -translate-x-1/2 -translate-y-1/2'
              src='/assets/shared/desktop/image-category-thumbnail-headphones.png'
              alt=''
            />
            <h6 className='text-mobileMenu'>HEADPHONES</h6>
            <ButtonShop onClick={handleClick} to='/headphones'></ButtonShop>
          </div>
        </li>
        <li className=''>
          <div className='relative flex flex-col gap-[22px] text-center bg-paleSilver rounded-lg px-[110px] md:px-[54px] pt-[88px] pb-[22px] mx-auto'>
            <img
              className='w-1/2 h-auto absolute top-[20px] left-1/2 transform -translate-x-1/2 -translate-y-1/2'
              src='/assets/shared/desktop/image-category-thumbnail-speakers.png'
              alt=''
            />
            <h6 className='text-mobileMenu'>SPEAKERS</h6>
            <ButtonShop onClick={handleClick} to='/speakers'></ButtonShop>
          </div>
        </li>
        <li className=''>
          <div className='relative flex flex-col gap-[22px] text-center bg-paleSilver rounded-lg px-[110px] md:px-[54px] pt-[88px] pb-[22px] mx-auto'>
            <img
              className='w-1/2 h-auto absolute top-[25px] left-1/2 transform -translate-x-1/2 -translate-y-1/2'
              src='/assets/shared/desktop/image-category-thumbnail-earphones.png'
              alt=''
            />
            <h6 className='text-mobileMenu'>EARPHONES</h6>
            <ButtonShop onClick={handleClick} to='/earphones'></ButtonShop>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default MobileNav;
