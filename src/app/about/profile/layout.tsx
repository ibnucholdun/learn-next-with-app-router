import React from "react";

type Props = {
  children: React.ReactNode;
};

const ProfileLayout = (props: Props) => {
  const { children } = props;
  return (
    <>
      <h1>Title</h1>
      <div>{children}</div>
    </>
  );
};

export default ProfileLayout;
