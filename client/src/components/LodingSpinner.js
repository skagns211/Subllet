import React, { useState } from "react";
import { css } from "@emotion/react";
import ScaleLoader from "react-spinners/ScaleLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: white;
`;

function LoadingSpinner() {
  let [color, setColor] = useState("#ff8a00");

  return (
    <div className="sweet-loading">
      <ScaleLoader
        color={color}
        setColor={setColor}
        css={override}
        size={250}
      />
    </div>
  );
}

export default LoadingSpinner;
