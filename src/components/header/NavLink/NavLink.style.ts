import styled from 'styled-components';
import { device } from '@/style/breakpoints';

const StyledNavLink = styled.div`
  position: relative;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  width: 40vw;
  max-inline-size: 35em;
  gap: 1em;
  
  background-color: ${props => props.theme.colors.backgroundColor};

  .underline-link:active::after,
  .underline-link:hover::after,
  .active::after {
    content: '';
    position: absolute;
    top: 7.9vh;
    width: 100%;
    height: 0.25em;
    border-radius: ${props => props.theme.border.radius};
    background-color: ${props => props.theme.colors.primary};
    transition: ${props => props.theme.transition.default};
  }

  @media ${device.sm} {
    display: none;
  }

  @media ${device.md} {
    display: flex;
    gap: 2em;
  }
`;

export default StyledNavLink;