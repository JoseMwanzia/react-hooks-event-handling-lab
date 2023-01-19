// Code EyesOnMe Component Here

import React from "react";
import { ReactDOM } from "react";

function EyesOnMe() {

  return (
    <div>
      <button
        onBlur={() => console.log("Hey! Eyes on me!")}
        onFocus={() => console.log("Good!")}
      >
        Eyes on me
      </button>
    </div>
  );
}

export default EyesOnMe;
