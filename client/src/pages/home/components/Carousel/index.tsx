import React from 'react'
import { products } from '@/data/products';
import { ProductType } from '@/types/product';
import styled from 'styled-components';
import { unselectable } from '@/style';

const Carousel = () => {
  const defaultSelected: ProductType = {
    id: products[0].id,
    src: products[0].src,
    alt: products[0].alt
  }

  const [select, setSelect] = React.useState<ProductType>(defaultSelected);

  console.log(select);

  return (
    <StyledCarousel>
      {/* large image show product */}
      <StyledMainImg src={select.src} alt={select.alt} />

      {/* show bar choose product */}
      <StyledBarWrapper>
        {products.map((product: ProductType) => {
          const { id, src, alt } = product;
          return (
            <StyledBarItemWrapper selected={select.id === id}>
              <StyledBarItem
                key={id}
                src={src}
                alt={alt}
                onClick={() => setSelect(product)}
                selected={select.id === id}
              />
            </StyledBarItemWrapper>
          )
        })}
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