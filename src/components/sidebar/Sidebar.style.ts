import styled from 'styled-components';

interface StyledSidebarType {
  isOpen: boolean,
}

const StyledSidebar = styled.div<StyledSidebarType>`
  position: fixed;
  top: 0;
  left: 0;

  display: ${props => props.isOpen ? 'flex' : 'none'};
  flex-direction: column;
  align-items: flex-start;
  gap: 2em;

  inline-size: calc(40vw - 2em);
  height: 100%;
  padding: 3em 2em 2em;

  background-color: ${props => props.theme.colors.backgroundColor};

  animation: move-right 0.5s ease forwards;

  .close-icon {
    scale: 1.2;
  }

  .sidebar-overlap {
    position: fixed;
    top: 0;
    left: 40vw;
    width: 100%;
    height: 100%;
    backdrop-filter: brightness(60%);
  }

  @keyframes move-right {
    from {
      left: -100px;
    }
    to {
      left: 0;
    }
  }
`;

export default StyledSidebar;