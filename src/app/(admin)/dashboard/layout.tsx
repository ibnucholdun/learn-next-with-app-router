import React from "react";

type Props = {
  children: React.ReactNode;
  products: React.ReactNode;
  analytics: React.ReactNode;
  payments: React.ReactNode;
};

const Layout = (props: Props) => {
  const { children, products, analytics, payments } = props;
  return (
    <div className="p-5">
      <div>{children}</div>
      <div className="mt-5 flex justify-center items-center">
        {products}
        {analytics}
      </div>
      {payments}
    </div>
  );
};

export default Layout;
