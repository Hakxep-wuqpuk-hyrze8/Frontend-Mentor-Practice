import Card from '@/pages/home/components/Card';
import Carousel from '@/pages/home/components/Carousel'
import React from 'react'

import styled from "styled-components"

const Home = () => {
  return (
    <StyledHomeContainer>
      <Carousel />
      <Card />
    </StyledHomeContainer>
  );
};

export default Home;


const StyledHomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10em;
  margin: 4rem 5rem 0;
`;
