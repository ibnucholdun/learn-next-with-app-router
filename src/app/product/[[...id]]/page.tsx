import React from "react";

type Props = {
  params: {
    id: string[];
  };
};

const getData = async () => {
  // const res = await fetch("https://fakestoreapi.com/products", {
  //   cache: "no-store",
  // });
  const res = await fetch("http://localhost:3000/api/productdfs", {
    // cache ini bisa berguna untuk mejaga performance website karena ketika membua websie tidak memfetch ulang melainkan mengambil datanya dari cache
    cache: "no-store",
    next: {
      tags: ["products"], //tag ini untuk menambahkan cache secara manual melalui enpoint api
      // revalidate: 60, //waktu yang digunakan untuk mengupdate data cache untuk satu hari waktunya (3600*24)
    },
  });

  if (!res.ok) {
    throw new Error("Something went wrong data");
  }
  const data = await res.json();
  return data;
};

const ProductPage = async (props: Props) => {
  const { params } = props;
  const products = await getData();
  return (
    <div className="grid grid-cols-3 place-items-center">
      {/* <h1>{params.id ? "Detail Product Page" : "Product Page"}</h1> */}
      {products.data.length > 0 &&
        products.data.map((product: any) => (
          <div
            key={product.id}
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5"
          >
            <a href="#">
              <img
                className="p-8 rounded-t-lg object-cover h-96 w-full"
                src={product.image}
                alt="product image"
              />
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">
                  {product.name}
                </h5>
              </a>

              <div className="flex items-center justify-between mt-3">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${product.price}
                </span>
                <a
                  href="#"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to cart
                </a>
              </div>
            </div>
          </div>
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
