import React from "react";

type Props = {
  params: {
    id: string;
  };
};

const DetailProduct = (props: Props) => {
  const { params } = props;

  return (
    <div>
      <h1>DetailProduct</h1>
      <p>{params.id}</p>
    </div>
  );
};

export default DetailProduct;
