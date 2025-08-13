
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface CodeDisplayProps {
  code: string;
  language: string;
}

export const SyntaxArea: React.FC<CodeDisplayProps> = ({ code, language }) => {
  return (
    <SyntaxHighlighter language={language} style={docco}>
      {code}
    </SyntaxHighlighter>
  );
};
