import React from 'react'
import styled from 'styled-components';

// images 
import Product1 from '../../../assets/image-product-1.jpg'
import Product2 from '../../../assets/image-product-2.jpg'
import Product3 from '../../../assets/image-product-3.jpg'
import Product4 from '../../../assets/image-product-4.jpg'

const Carousel = () => {
  return (
    <StyledCarousel>
      {/* large image show product */}
      <img className='main__img' src={Product1} alt='product' />

      {/* show bar choose product */}

      <div className='item__bar'>
        <img className='bar__img' src={Product1} alt='product' />
        <img className='bar__img' src={Product2} alt='product' />
        <img className='bar__img' src={Product3} alt='product' />
        <img className='bar__img' src={Product4} alt='product' />
      </div>
    </StyledCarousel>
  )
}

export default Carousel


const StyledCarousel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20vw;
  justify-content: space-between;
  height: 60vh;

  .main__img {
    width: 100%;
    border-radius: ${props => props.theme.border.bigintRadius};
  }

  .item__bar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .bar__img {
    width: 20%;
    border-radius: ${props => props.theme.border.radius};
  }
`;
