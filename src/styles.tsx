import styled from 'styled-components';
import { darken } from 'polished';

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

export const Footer = styled.footer`
  right: 0;
  left: 0;

  display: flex;
  align-items: center;

  height: ${headerAndFooterHeight}px;

  padding: 0 20px;
  margin-top: auto;

  background: ${(props) => props.theme.colors.headerBackground};

  button {
    width: 120px;
    height: 30px;

    border: none;
    border-radius: 2px;

    background: ${(props) => props.theme.colors.highlight};

    font-family: 'Source Sans Pro', sans - serif;
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.light};

    cursor: pointer;

    &:hover {
      background: ${(props) => darken(0.05, props.theme.colors.highlight)};
    }
  }
`;
