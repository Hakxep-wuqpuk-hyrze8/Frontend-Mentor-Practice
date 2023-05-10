import React from 'react'
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { centerItem } from '@/style';

export const StyledLink = styled(Link)`
  position: relative;

  display: flex;
  flex: none;
  align-items: center;

  width: fit-content;

  color: hsl(0, 0%, 50%);

  font-weight: 600;
  text-transform: capitalize;
  
  &:hover,
  &:active {
    color: hsl(0, 0%, 0%);
  }
`;

export const StyledSidebarLink = styled(StyledLink)`
  color: hsl(0, 0%, 0%);
  font-size: large;
  font-weight: 800;
  letter-spacing: .5px;
`;

interface ButtonProps {
  disabled?: boolean;
  primary?: boolean;
  iconLeft?: boolean;
  width?: number;
  // icon?: React.ReactNode | string | any;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const StyledButton = styled.button<ButtonProps>`
  width: ${props => props.width || '100%'}%;
  padding-top: 1em;
  padding-bottom: 1em;

  display: flex;
  -webkit-display: none;
  flex: none;
  align-items: center;
  justify-content: center;

  border-radius: ${props => props.theme.border.radius};

  line-height: 1.2;
  font-weight: bold;
  
  cursor: pointer;
  opacity: ${props => (props.disabled ? '0.6' : '1')};
  transition: box-shadow 0.2s ease-in-out;

  ${props => props.primary && css`
    background-color:${props.theme.colors.primary};
    color: ${props.theme.colors.white};
  `}

  ${props => props.iconLeft && css`
    .icon {
      ${centerItem}
      width: 15%;
      color: white;
      margin-right: 1em;
      border-color: #9c4040;
    }
  `}
`;


export const Button = ({ icon, children, ...props }: ButtonProps) => {
  return (
    <StyledButton {...props}>
      <span className='icon'>{icon}</span>
      {children}
    </StyledButton>
  )
}

export default Button;