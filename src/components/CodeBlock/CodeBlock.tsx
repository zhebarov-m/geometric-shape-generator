import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Script from "./Script";

const MyCodeBlock: FC = () => {
  const { size, width, height, color } = useSelector(
    (state: RootState) => state.square
  );
  const angles = useSelector((state: RootState) => state.radius.angles);
  const { radius } = useSelector((state: RootState) => state.radius);

  return (
    <div
      style={{
        width: "900px !important",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Script>
        <h3>{`.square {`}</h3>
        <p>
          width: <span>{width}</span>px;
        </p>
        <p>
          height: <span>{height}</span>px;
        </p>
        <p>
          background-color: <span>{color}</span>;
        </p>
        {radius ? (
          <p>
            border-radius: <span>{radius}px;</span>
          </p>
        ) : (
          <p>
            border-radius: <span>{angles[0]}</span>px <span>{angles[1]}</span>px{" "}
            <span>{angles[2]}</span>px <span>{angles[3]}</span>px;
          </p>
        )}
        <p>
          transform: scale(<span>{size}</span>)
        </p>
        <p>
          transform:: rotate(<span>{45}</span>deg)
        </p>
        <h3>{`}`}</h3>
      </Script>
    </div>
  );
};

export default MyCodeBlock;
