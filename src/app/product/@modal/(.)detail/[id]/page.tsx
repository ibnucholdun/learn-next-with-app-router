import getData from "@/services/products";
import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";

const Modal = dynamic(() => import("@/components/core/Modal"));

type Props = {
  params: any;
};

const DetailProductPage = async (props: Props) => {
  const { params } = props;
  const { data } = await getData(
    `http://localhost:3000/api/product/?id=${params.id}`
  );
  return (
    <Modal>
      <Image
        src={data.image}
        alt=""
        className="w-full object-cover aspect-square col-span-2"
        width={300}
        height={300}
      />
      <div className="bg-white p-4 px-6">
        <h3>{data.name}</h3>
        <p>Price : {data.price}</p>
      </div>
    </Modal>
  );
};

export default DetailProductPage;
