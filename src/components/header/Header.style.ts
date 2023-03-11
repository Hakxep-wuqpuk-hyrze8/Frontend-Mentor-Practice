import styled from "styled-components"
import { device } from '@/style/breakpoints';

const StyledHeader = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90vw;
  height: 15vh;
  margin: 0 auto;

  // 分成左右部分
  .left {
    display: flex;
    align-items: center;
  }

  .right {
    display: flex;
    align-items: center;
    gap: 3em;
  }

  // component
  .logo {
    inline-size: 10em;
    margin-inline-end: 4em;
    cursor: pointer;
  }
  .cart {
    cursor: pointer;
  }
  .avatar {
    inline-size: 3.5em;
    cursor: pointer;

    &:hover,
    &:active {
      outline: 2px ${props => props.theme.colors.primary} solid;
      outline-offset: -2px;
      border-radius: 50%;
    }
  }
  .menu {
    margin-inline-end: 1em;
    scale: 1.2;

    @media ${device.lg} {
      display: none;
    }
  }

  // header 下的線條
  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 0.05em;
    border-radius: ${props => props.theme.border.radius};
    background-color: ${props => props.theme.colors.lightBoxBg};
    transition: ${props => props.theme.transition.default};
  }
`;

export default StyledHeader;