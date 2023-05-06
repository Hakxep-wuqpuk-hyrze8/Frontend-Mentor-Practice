import styled from 'styled-components';

const StyledSidebarLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 1.5em;

  background-color: ${props => props.theme.colors.backgroundColor};
`;

export default StyledSidebarLinks;