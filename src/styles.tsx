import styled from 'styled-components';

export const Header = styled.header`
  right: 0;
  left: 0;

  display: flex;
  align-items: center;

  height: 50px;

  padding: 0 20px;

  background: ${(props) => props.theme.colors.headerBackground};

  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.dark};
`;
