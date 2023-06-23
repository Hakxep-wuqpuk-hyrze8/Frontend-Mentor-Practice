import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import Plus from '@/assets/icon-plus.svg';
import Minus from '@/assets/icon-minus.svg';
import Cart from '@/assets/icon-cart.svg';

import Product1 from '@/assets/image-product-1.jpg';
import Product2 from '@/assets/image-product-2.jpg'
import Product3 from '@/assets/image-product-3.jpg'
import Product4 from '@/assets/image-product-4.jpg'

import ThumbnailProduct1 from '@/assets/image-product-1-thumbnail.jpg';
import ThumbnailProduct2 from '@/assets/image-product-2-thumbnail.jpg'
import ThumbnailProduct3 from '@/assets/image-product-3-thumbnail.jpg'
import ThumbnailProduct4 from '@/assets/image-product-4-thumbnail.jpg'
import content from './../../svg.d';

const Home = () => {
  const [mainImg, setMainImg] = useState<string>(Product1);

  return (
    <div className='container flex flex-row w-10/12 mx-auto mt-6'>
      {/* item image */}
      <div className='w-1/2 flex flex-col gap-6 justify-center items-center'>
        {/* main img */}
        <div className='w-4/6'>
          <img className='rounded-2xl' src={mainImg} alt="sneaker" />
        </div>
        {/* nav img */}

        <div className='flex flex-row justify-center gap-8'>
          <div className='w-[13.5%] relative hover:before:content-[""] hover:before:absolute hover:before:w-full hover:before:h-full hover:before:rounded-lg hover:before:block hover:before:border-2 before:border-primary'>
            <img className='rounded-xl hover:opacity-25' src={ThumbnailProduct1} alt="sneaker"></img>
          </div>
          <div className='w-[13.5%] relative hover:before:content-[""] hover:before:absolute hover:before:w-full hover:before:h-full hover:before:rounded-lg hover:before:block hover:before:border-2 before:border-primary'>
            <img className='rounded-xl hover:opacity-25' src={ThumbnailProduct2} alt="sneaker"></img>
          </div>
          <div className='w-[13.5%] relative hover:before:content-[""] hover:before:absolute hover:before:w-full hover:before:h-full hover:before:rounded-lg hover:before:block hover:before:border-2 before:border-primary'>
            <img className='rounded-xl hover:opacity-25' src={ThumbnailProduct3} alt="sneaker"></img>
          </div>
          <div className='w-[13.5%] relative hover:before:content-[""] hover:before:absolute hover:before:w-full hover:before:h-full hover:before:rounded-lg hover:before:block hover:before:border-2 before:border-primary'>
            <img className='rounded-xl hover:opacity-25' src={ThumbnailProduct4} alt="sneaker"></img>
          </div>
        </div>
      </div>

      {/* item details */}

      <div className='w-4/12 flex justify-center items-center ml-16'>
        <div className='w-full flex flex-col gap-4'>
          {/* company */}
          <h4 className='text-medium font-extrabold text-primary tracking-wider uppercase'>Sneaker Company</h4>
          {/* title */}
          <h1 className='font-bold font-kumbh leading-12 text-5xl'>Fall Limited Edition Sneakers</h1>
          {/* desc */}
          <p className='font-kumbh text-gray-400 leading-6'>
            These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
          </p>

          {/* price section */}
          <div className='flex flex-col'>

            {/* price and discount */}
            <div className='flex flex-row gap-6 items-center'>
              <span className='text-2xl font-bold font-kumbh'>$125.00</span>
              <span className='font-bold font-kumbh text-primary bg-secondary px-2 py-1 rounded-lg'>50%</span>
            </div>
            {/* originPrice */}
            <span className='font-bold font-kumbh text-gray-400 opacity-75 line-through'>$250.00</span>

          </div>

          {/* counter and buy button */}
          <div className='flex flex-row gap-2'>
            <div className="w-1/3 select-none">
              <div className="flex flex-row select-none h-10 w-full rounded-lg relative bg-transparent mt-1">
                <button type='button' data-action="decrement" className="select-none bg-light-grayish-blue hover:opacity-50 h-full w-20 rounded-l cursor-pointer outline-none">
                  <img className='m-auto' src={Minus} alt='+'></img>
                </button>

                <input type="number" className="select-none pl-1 outline-none focus:outline-none text-center w-full bg-light-grayish-blue font-semibold text-md md:text-basecursor-default flex items-center" name="input-number" value="0">
                </input>

                <button type='button' data-action="increment" className="select-none bg-light-grayish-blue hover:opacity-50 h-full w-20 rounded-r cursor-pointer">
                  <img className='m-auto' src={Plus} alt='-'></img>
                </button>
              </div>
            </div>

            <button type="submit" className="w-7/12 flex flex-row justify-center items-center gap-4 rounded-lg bg-primary hover:opacity-50 text-white" >
              <img src={Cart} alt='cart' ></img>
              <h6 className='font-bold font-kumbh'>
                Add to cart
              </h6>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;