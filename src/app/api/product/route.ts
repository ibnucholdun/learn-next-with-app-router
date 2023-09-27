import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: 1000,
  },
  {
    id: 2,
    name: "Sepatu Lama",
    price: 500,
  },
  {
    id: 3,
    name: "Sepatu Pria",
    price: 10000,
  },
];

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const detailProduct = data.find((item) => item.id === Number(id));
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

  return NextResponse.json({
    status: 200,
    message: "Success",
    data: data,
  });
};
