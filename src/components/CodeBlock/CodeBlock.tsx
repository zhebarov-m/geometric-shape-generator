import { FC } from "react";
import { CodeBlock, dracula } from "react-code-blocks";

interface iCodeProps {
  code: string;
  language: string;
  showLineNumbers: boolean;
  startingLineNumber: number;
}

const MyCodeBlock: FC<iCodeProps> = ({
  code,
  language,
  showLineNumbers,
  startingLineNumber,
}) => {
  return (
    <div style={{ width: "900px !important", display: 'flex', justifyContent: 'center'}}>
      <CodeBlock
        text={code}
        language={language}
        showLineNumbers={showLineNumbers}
        startingLineNumber={startingLineNumber}
        theme={dracula}
      />
    </div>
  );
};

export default MyCodeBlock;
