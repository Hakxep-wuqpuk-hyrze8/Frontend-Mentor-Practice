import styled from "styled-components"

const StyledHeader = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90vw;
  height: 15vh;
  margin: 0 auto;

  .left {
    display: flex;
    align-items: center;

  }

  .right {
    display: flex;
    align-items: center;
    gap: 3em;

  }

  .logo {
    width: 10vw;
    max-inline-size: 10em;
    cursor: pointer;
  }
  .cart {
    cursor: pointer;
  }
  .avatar {
    width: 3.5vw;
    max-width: 4em;
    cursor: pointer;

    &:hover,
    &:active {
      outline: 2px ${props => props.theme.colors.primary} solid;
      outline-offset: -2px;
      border-radius: 50%;
    }
  }

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