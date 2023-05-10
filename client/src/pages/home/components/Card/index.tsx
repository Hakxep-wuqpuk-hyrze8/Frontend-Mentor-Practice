import React, { SVGProps } from 'react'
import { unselectable, centerItem } from '@/style';
import styled from "styled-components";

import plusIcon from "@/assets/icon-plus.svg";
import minusIcon from "@/assets/icon-minus.svg";
import cartIcon from "@/assets/icon-cart.svg";
import SVGImage from '@/components/ui/SVGimage';
import { Button } from '@/components/ui/Button/Button.style';

const Card = () => {
  return (
    <StyledCardWrapper>
      <StyledCardSubTitle>Sneaker Company</StyledCardSubTitle>
      <StyledCardTitle>Fall Limited Edition Sneakers</StyledCardTitle>
      <StyledCardDiscription>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand
        everything the weather can offer.
      </StyledCardDiscription>

      <StyledCardPriceWrapper>

        <StyledCardPriceRow>
          <StyledCardPrice>$125.00</StyledCardPrice>
          <StyledCardDiscount>50%</StyledCardDiscount>
        </StyledCardPriceRow>

        <StyledCardOldPrice>$250.00</StyledCardOldPrice>

      </StyledCardPriceWrapper>


      <StyledCardFooter>

        <StyledCardCounterWrapper>
          <StyledCardCounterCell>
            <SVGImage src={plusIcon} alt="plus"></SVGImage>
          </StyledCardCounterCell>
          <StyledCardCounterNumber>0</StyledCardCounterNumber>
          <StyledCardCounterCell>
            <SVGImage src={minusIcon} alt="minus"></SVGImage>
          </StyledCardCounterCell>

        </StyledCardCounterWrapper>

        <Button primary width={55} iconLeft
          icon={<SVGImage src={cartIcon} alt="cart"></SVGImage>}
        >
          Add to Cart
        </Button>

      </StyledCardFooter>

    </StyledCardWrapper>
  )
}

export default Card;

const StyledCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;

  width: 30vw;

  gap: 1.5em;
`;

const StyledCardTitle = styled.h1`
  font-weight: bold;
`

const StyledCardSubTitle = styled.h5`
  color: ${porps => porps.theme.colors.primary};
  font-weight: bold; 
`

const StyledCardDiscription = styled.p`
  color: ${porps => porps.theme.colors.darkGrayishBlue};
  letter-spacing: .5px;
  opacity: .8;
`

const StyledCardPriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5em;
`
const StyledCardPriceRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5em;
`

const StyledCardPrice = styled.h3`
  font-weight: bold; 
`;

const StyledCardDiscount = styled.h5`
  padding: 2px;
  font-weight: bold;
  color: ${porps => porps.theme.colors.primary};
  background-color: ${porps => porps.theme.colors.secondary};
`

const StyledCardOldPrice = styled.p`
  color: ${porps => porps.theme.colors.grayishBlue};
  text-decoration: line-through;
`
const StyledCardFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const StyledCardCounterWrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: row;
  background-color: ${porps => porps.theme.colors.lightGrayishBlue};
  border-radius: ${porps => porps.theme.border.radius};
`

const StyledCardCounterCell = styled.button`
  ${centerItem};  
  padding: 1em .8em;
`

const StyledCardCounterNumber = styled.h5`
  margin: auto auto;
  color: ${porps => porps.theme.colors.darkGrayishBlue};
  font-weight: bold;
`

