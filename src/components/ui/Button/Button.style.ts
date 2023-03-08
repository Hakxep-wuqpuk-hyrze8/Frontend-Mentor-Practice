import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  display: flex;
  flex: none;
  align-items: center;
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
