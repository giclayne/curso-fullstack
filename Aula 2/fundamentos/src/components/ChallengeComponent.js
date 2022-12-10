import React from "react";

const funcaoSoma = () => {
  const a = 10;
  const b = 15;
  console.log(a + b);
};
const ChallengeComponent = () => {
  return (
    <div>
      <div>
        <button onClick={funcaoSoma}>Soma</button>
      </div>
    </div>
  );
};

export default ChallengeComponent;
