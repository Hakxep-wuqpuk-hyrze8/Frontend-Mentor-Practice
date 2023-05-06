import Carousel from '@/components/ui/Carousel'
import React from 'react'

import styled from "styled-components"

const Home = () => {
  return (
    <StyledHomeContainer>
      <Carousel />
    </StyledHomeContainer>
  );
};

export default Home;


const StyledHomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 5rem;
`;
