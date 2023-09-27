import React from "react";

type Props = {
  params: {
    id: string[];
  };
};

const DetailProduct = (props: Props) => {
  const { params } = props;

  return (
    <div>
      <h1>{params.id ? "Detail Product Page" : "Product Page"}</h1>
      {params.id && (
        <>
          <p>Category : {params.id[0]}</p>
          <p>Gender : {params.id[1]}</p>
          <p>id : {params.id[2]}</p>
        </>
      )}
    </div>
  );
};

export default DetailProduct;
