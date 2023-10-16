import getData from "@/services/products";
import Link from "next/link";
import React from "react";

type Props = {
  params: {
    id: string[];
  };
};

const ProductPage = async (props: Props) => {
  const { params } = props;
  const products = await getData("http://localhost:3000/api/product");
  return (
    <div className="grid grid-cols-3 place-items-center">
      {/* <h1>{params.id ? "Detail Product Page" : "Product Page"}</h1> */}
      {products.data.length > 0 &&
        products.data.map((product: any) => (
          <Link
            href={`/product/detail/${product.id}`}
            key={product.id}
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5"
          >
            <img
              className="p-8 rounded-t-lg object-cover h-96 w-full"
              src={product.image}
              alt="product image"
            />

            <div className="px-5 pb-5">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">
                {product.name}
              </h5>

              <div className="flex items-center justify-between mt-3">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${product.price}
                </span>
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </Link>
        ))}
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

export default ProductPage;
