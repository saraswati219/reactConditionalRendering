import React, { useState } from "react";

const CondRend1 = () => {
  const [flag, setFlag] = useState(true);
  return (
    <>
      <div className="w-50 m-auto text-center">
        <button
          className="btn btn-warning"
          onClick={() => {
            if (flag === true) {
              setFlag(false);
            } else {
              setFlag(true);
            }
          }}
        >
          Show Message
        </button>
        {/* <p>Good morning!</p> */}
        {flag == true ? <p>Good morning!</p> : null}
      </div>
    </>
  );
};

export default CondRend1;
