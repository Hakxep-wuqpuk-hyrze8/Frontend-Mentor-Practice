import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  position: relative;

  display: flex;
  flex: none;
  align-items: center;

  width: fit-content;

  color: hsl(0, 0%, 50%);

  font-weight: 600;
  
  &:hover,
  &:active {
    color: hsl(0, 0%, 0%);
  }
`;

export const StyledLinkWithUnderLine = styled(StyledLink)`
  &::after {
    content: '';
    position: absolute;
    top: 7.5vh;
    width: 100%;
    height: 0.2em;
    background-color: ${props => props.theme.colors.primary};
    cursor: auto;
  }
`;

export const StyledButton = styled.button`
  font-weight: 600;
  border-radius: 32px;
  display: flex;
  flex: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  -webkit-display: none;
  opacity: ${props => (props.disabled ? '0.6' : '1')};
  line-height: 1.2;
  transition: box-shadow 0.2s ease-in-out;
  .icon:not(:first-child):not(:last-child) {
    margin-right: 4px;
  }
`;