"use client";

import { useEffect } from "react";

type Props = {
  error: Error;
  reset: () => void;
};

const error = (props: Props) => {
  const { error, reset } = props;

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
};

export default error;
