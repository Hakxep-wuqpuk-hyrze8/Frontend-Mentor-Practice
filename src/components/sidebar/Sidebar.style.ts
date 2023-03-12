import styled from 'styled-components';

const StyledSidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2em;

  inline-size: calc(40vw - 2em);
  height: 100%;
  padding: 2em;

  background-color: ${props => props.theme.colors.backgroundColor};

  .close-icon {
    inline-size: 5em;
  }

  .sidebar-overlap {
    position: fixed;
    top: 0;
    left: 40vw;
    width: 100%;
    height: 100%;
    backdrop-filter: brightness(60%);
  }
`;

export default StyledSidebar;