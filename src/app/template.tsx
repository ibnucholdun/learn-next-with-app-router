"use client";

import React, { useState } from "react";

type Props = {};

const Template = (props: Props) => {
  const { children } = props;
  const [state, setState] = useState(0);
  return (
    <div>
      <h1>Template : {state}</h1>
      <button onClick={() => setState(state + 1)}>Klik</button>
      {children}
    </div>
  );
};

export default Template;

// untuk template ketika berpindah routing tidak membawa nilai statenya dan akan memberikan nilai awal/ tereset / new instance
