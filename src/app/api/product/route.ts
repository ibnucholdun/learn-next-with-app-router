import { retriveData, retriveDataById } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: 1000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a3734282-d3ff-4df6-96bd-bbe1227ef63c/cortez-shoes-0VH7qz.png",
  },
  {
    id: 2,
    name: "Sepatu Lama",
    price: 500,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a3734282-d3ff-4df6-96bd-bbe1227ef63c/cortez-shoes-0VH7qz.png",
  },
  {
    id: 3,
    name: "Sepatu Pria",
    price: 10000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a3734282-d3ff-4df6-96bd-bbe1227ef63c/cortez-shoes-0VH7qz.png",
  },
  {
    id: 4,
    name: "Sepatu Jelek",
    price: 10000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a3734282-d3ff-4df6-96bd-bbe1227ef63c/cortez-shoes-0VH7qz.png",
  },
  {
    id: 5,
    name: "Sepatu Super",
    price: 10,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a3734282-d3ff-4df6-96bd-bbe1227ef63c/cortez-shoes-0VH7qz.png",
  },
];

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const detailProduct = await retriveDataById("products", id);
    if (detailProduct) {
      return NextResponse.json({
        status: 200,
        message: "Success",
        data: detailProduct,
      });
    }
    return NextResponse.json({
      status: 404,
      message: "Not Found",
      data: {},
    });
  }

  const products = await retriveData("products");

  return NextResponse.json({
    status: 200,
    message: "Success",
    data: products,
  });
};
