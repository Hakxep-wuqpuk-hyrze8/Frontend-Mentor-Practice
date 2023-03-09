import styled from 'styled-components';

const StyledNavLink = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  padding: 1em;
  width: 40vw;
  max-width: 35em;
  background-color: ${props => props.theme.colors.secondary};
`;

export default StyledNavLink;