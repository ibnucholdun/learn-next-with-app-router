import React from "react";

type Props = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

const Layout = (props: Props) => {
  const { children, modal } = props;
  return (
    <div>
      {children}
      {modal}
    </div>
  );
};

export default Layout;
