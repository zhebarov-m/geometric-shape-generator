import { FC } from "react";
import { CodeBlock, dracula } from "react-code-blocks";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

interface iCodeProps {
  language: string;
  showLineNumbers: boolean;
  startingLineNumber: number;
}

const MyCodeBlock: FC<iCodeProps> = ({
  language,
  showLineNumbers,
  startingLineNumber,
}) => {
  const { size, width, height } = useSelector(
    (state: RootState) => state.square
  );
  const angles = useSelector((state: RootState) => state.radius.angles);

  const code = `
    .square {
      width: ${width}px;
      height: ${height}px;
      background-color: white;
      border-radius: ${angles[0]}px ${angles[1]}px ${angles[2]}px ${angles[3]}px;
      transform: scale(${size});
      transform: rotate(45deg);
    }`;
  return (
    <div
      style={{
        width: "900px !important",
        display: "flex",
        justifyContent: "center",
      }}
    >
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
