import styled from 'styled-components';

const headerAndFooterHeight = 50;

export const Header = styled.header`
  right: 0;
  left: 0;

  display: flex;
  align-items: center;

  height: ${headerAndFooterHeight}px;

  padding: 0 20px;

  background: ${(props) => props.theme.colors.headerBackground};

  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.dark};
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;

  max-height: calc(100% - ${headerAndFooterHeight * 2}px);
`;
