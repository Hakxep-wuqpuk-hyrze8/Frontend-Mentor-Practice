import React, { useState } from 'react'
import { Link, LoaderFunction, useParams, useNavigate } from 'react-router-dom';

import Plus from '@/assets/icon-plus.svg';
import Minus from '@/assets/icon-minus.svg';
import Cart from '@/assets/icon-cart.svg';

import { useGetProductQuery } from '@/feature/api/apiSlice';

import Product1 from '@/assets/image-product-1.jpg';
import Product2 from '@/assets/image-product-2.jpg'
import Product3 from '@/assets/image-product-3.jpg'
import Product4 from '@/assets/image-product-4.jpg'

import ThumbnailProduct1 from '@/assets/image-product-1-thumbnail.jpg';
import ThumbnailProduct2 from '@/assets/image-product-2-thumbnail.jpg'
import ThumbnailProduct3 from '@/assets/image-product-3-thumbnail.jpg'
import ThumbnailProduct4 from '@/assets/image-product-4-thumbnail.jpg'
import CartIcon from '@/components/CartIcon';
import ErrorPage from '../Error';
import LoadingPage from '../Loading';

const productLoader: LoaderFunction = ({ request, params }) => {
  const id = params.id;
  return useGetProductQuery(Number(id));
}

const Product = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [mainImg, setMainImg] = useState<string>(Product1);

  console.log(id);

  const { data: product, isLoading, isFetching, isError } = useGetProductQuery(Number(id));

  console.log(product);

  if (isError || !product) {
    return <ErrorPage />;
  }

  if (isLoading) {
    return <LoadingPage />;
  }


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
          <div className='w-[13.5%] relative hover:before:content-[""] hover:before:absolute hover:before:w-full hover:before:h-full hover:before:rounded-xl hover:before:block hover:before:border-2 before:border-primary before:opacity-50'>
            <img className='rounded-xl hover:opacity-25' src={ThumbnailProduct1} alt="sneaker"></img>
          </div>
          <div className='w-[13.5%] relative hover:before:content-[""] hover:before:absolute hover:before:w-full hover:before:h-full hover:before:rounded-xl hover:before:block hover:before:border-2 before:border-primary before:opacity-50'>
            <img className='rounded-xl hover:opacity-25' src={ThumbnailProduct2} alt="sneaker"></img>
          </div>
          <div className='w-[13.5%] relative hover:before:content-[""] hover:before:absolute hover:before:w-full hover:before:h-full hover:before:rounded-xl hover:before:block hover:before:border-2 before:border-primary before:opacity-50'>
            <img className='rounded-xl hover:opacity-25' src={ThumbnailProduct3} alt="sneaker"></img>
          </div>
          <div className='w-[13.5%] relative hover:before:content-[""] hover:before:absolute hover:before:w-full hover:before:h-full hover:before:rounded-xl hover:before:block hover:before:border-2 before:border-primary before:opacity-50'>
            <img className='rounded-xl hover:opacity-25' src={ThumbnailProduct4} alt="sneaker"></img>
          </div>
        </div>
      </div>

      {/* item details */}

      <div className='w-4/12 flex justify-center items-center ml-16'>
        <div className='w-full flex flex-col gap-4'>
          {/* company */}
          <h4 className='text-medium font-extrabold text-primary tracking-wider uppercase'>
            {product.company}
          </h4>
          {/* title */}
          <h1 className='font-bold font-kumbh leading-12 sm:text-3xl md:text-5xl'>
            {product.name}
          </h1>
          {/* desc */}
          <p className='font-kumbh text-gray-400 leading-6'>
            {product.discription}
          </p>

          {/* price section */}
          <div className='flex flex-col'>

            {/* price and discount */}
            <div className='flex flex-row gap-6 items-center'>
              <span className='text-2xl font-bold font-kumbh'>
                ${(product.price * product.discount / 100).toFixed(2)}
              </span>
              <span className='font-bold font-kumbh text-primary bg-secondary px-2 py-1 rounded-lg'>
                {product.discount}%
              </span>
            </div>
            {/* originPrice */}
            <span className='font-bold font-kumbh text-gray-400 opacity-75 line-through'>
              ${(product.price).toFixed(2)}
            </span>

          </div>

          {/* counter and buy button */}
          <div className='flex flex-row gap-2'>
            <div className="w-1/3 select-none">
              <div className="flex flex-row select-none h-10 w-full rounded-lg relative bg-transparent mt-1">
                <button type='button' data-action="decrement" className="select-none bg-light-grayish-blue hover:opacity-50 h-full w-20 rounded-l cursor-pointer outline-none">
                  <img className='m-auto' src={Minus} alt='+'></img>
                </button>

                <input type="number" className="select-none pl-4 outline-none focus:outline-none text-center w-full bg-light-grayish-blue font-semibold font-kumbh text-md md:text-basecursor-default flex items-center" name="input-number" defaultValue={0}>
                </input>

                <button type='button' data-action="increment" className="select-none bg-light-grayish-blue hover:opacity-50 h-full w-20 rounded-r cursor-pointer">
                  <img className='m-auto' src={Plus} alt='-'></img>
                </button>
              </div>
            </div>

            <button type="submit" className="w-7/12 flex flex-row justify-center items-center gap-4 rounded-lg bg-primary hover:opacity-50 text-white" >
              <CartIcon color='white' />
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

export default Product;