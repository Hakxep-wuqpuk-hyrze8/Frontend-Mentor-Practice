import React from 'react'
import { products } from '@/data/products';
import { ProductType } from '@/types/product';
import styled from 'styled-components';
import { unselectable } from '@/style';

type ImageType = {
  src: string;
  alt?: string;
}

const Carousel = () => {
  const defaultSelected: ImageType = { src: products[0].src[0], alt: products[0].alt };

  const [selectImage, setSelectImage] = React.useState<ImageType>(defaultSelected);

  const renderBarItems = (imgSrc: string[], alt?: string) => {
    return imgSrc.map((src: string, index: number) => {
      return (
        <StyledBarItemWrapper key={index} selected={selectImage.src === src}>
          <StyledBarItem
            src={src}
            alt={`${alt}${index}`}
            onClick={() => setSelectImage({ src: src, alt: alt })}
            selected={selectImage.src === src}
          />
        </StyledBarItemWrapper>
      )
    })
  }

  return (
    <StyledCarousel>
      {/* large image show product */}
      <StyledMainImg src={selectImage.src} alt={selectImage.alt || 'Product'} />

      {/* show bar choose product */}
      <StyledBarWrapper>
        {renderBarItems(products[0].src, products[0].alt)}
      </StyledBarWrapper>
    </StyledCarousel >
  )
}

export default Carousel

interface BarItemProps {
  selected: boolean;
}

const StyledCarousel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 24vw;
  justify-content: space-between;
  gap: 2.5rem;
  ${unselectable}
`;

const StyledMainImg = styled.img`
  width: 100%;
  border-radius: ${props => props.theme.border.bigintRadius};
`

const StyledBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const StyledBarItemWrapper = styled.div<BarItemProps>`
  position: relative;
  width: 20%;
  border-radius: ${props => props.theme.border.radius};
  ${(props) =>
    props.selected &&
    `
    box-shadow: 0 0 0 3px ${props.theme.colors.primary};
  `}
`;

const StyledBarItem = styled.img<BarItemProps>`
  width: 100%;
  height: 100%;
  border-radius: ${props => props.theme.border.radius};

  ${(props) =>
    props.selected &&
    `
    opacity: ${props.theme.opacity.translucent};
  `}
`