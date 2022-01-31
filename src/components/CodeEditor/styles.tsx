import styled from 'styled-components';
import CodeMirror from '@uiw/react-codemirror';
import { darken, lighten } from 'polished';

export const CustomCodeMirror = styled(CodeMirror)`
  width: 100%;

  height: 260px;
  min-height: 96px;
  max-height: 280px;

  overflow: auto;
  resize: vertical;

  .cm-editor {
    height: 100%;

    background: ${(props) => props.theme.codeEditor.background};

    font-size: 1.6rem;
    color: ${(props) => props.theme.codeEditor.default};
  }

  .cm-scroller {
    height: 100%;

    ::-webkit-scrollbar {
      width: 11px;
    }

    ::-webkit-scrollbar-track {
      background: transparent;
    }

    ::-webkit-scrollbar-thumb {
      border: solid 3px ${(props) => props.theme.codeEditor.background};
      border-radius: 20px;

      background: ${(props) => props.theme.codeEditor.scrollbar};
    }

    ::-webkit-scrollbar-thumb:hover {
      background: ${(props) => darken(0.2, props.theme.codeEditor.scrollbar)};
    }
  }

  .cm-content {
    caret-color: white;
  }

  .cm-content .cm-line {
    font-family: 'Source Code Pro', monospace;
  }

  .cm-activeLine {
    background: ${(props) => darken(0.05, props.theme.codeEditor.background)};
  }

  .cm-focused .cm-cursor {
    border-left-color: white;
  }

  .cm-focused .cm-selectionBackground,
  ::selection {
    background-color: ${(props) =>
      lighten(0.2, props.theme.codeEditor.background)};
  }

  .cm-gutters {
    border: none;

    background: ${(props) => props.theme.codeEditor.guttersBackground};

    color: ${(props) => props.theme.codeEditor.lineNumber};
  }

  .cm-gutterElement {
    min-width: 28px !important;
  }

  .cm-foldGutter {
    width: 0;
  }

  .cm-activeLineGutter {
    background: ${(props) =>
      darken(0.05, props.theme.codeEditor.guttersBackground)};
  }

  .ͼb {
    color: ${(props) => props.theme.codeEditor.variable};
  }

  .ͼd {
    color: ${(props) => props.theme.codeEditor.string};
  }

  .ͼc {
    color: ${(props) => props.theme.codeEditor.number};
  }
`;
