import React from 'react';
import { CustomCodeMirror } from './styles';
import { javascript } from '@codemirror/lang-javascript';

type Props = {
  rawData: string;
  onChange: (rawData: string) => void;
};

const CodeEditor: React.FC<Props> = ({ rawData, onChange }) => {
  return (
    <CustomCodeMirror
      value={rawData}
      extensions={[javascript()]}
      onChange={(value) => onChange(value)}
    />
  );
};

export default CodeEditor;
