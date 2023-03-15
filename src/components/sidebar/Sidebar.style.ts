import styled, { keyframes } from 'styled-components';

interface StyledSidebarType {
  isOpen: boolean,
}

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const StyledSidebar = styled.div<StyledSidebarType>`
  position: absolute;   
  top: 0;
  left: 0;

  inline-size: calc(40vw - 2em);
  
  .sidebar-inner {
    position: absolute;
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    align-items: flex-start;
    gap: 2em;

    inline-size: calc(40vw - 4em);
    height: 100vh;
    padding: 3em 2em 2em;

    background-color: ${props => props.theme.colors.backgroundColor};
    backdrop-filter: brightness(60%);
    animation: ${slideIn} 0.3s ease-in-out forwards;

    .close-icon {
      scale: 1.2;
    }

    z-index: 1000;
  }

  .backdrop {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: ${props => props.isOpen ? 'flex' : 'none'};
    background-color: hsla(0, 0%, 40%, 70%);
    z-index: 500;
  }
`;

export default StyledSidebar;