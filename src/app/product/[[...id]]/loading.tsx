import React from "react";

const loading = () => {
  return (
    <div className="grid grid-cols-3 place-items-center">
      <div className="w-full max-w-sm border rounded-lg shadow bg-gray-400 m-5 h-96">
        <a href="#"></a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 truncate"></h5>
          </a>

          <div className="flex items-center justify-between mt-3">
            <span className="text-3xl font-bold text-gray-900"></span>
          </div>
        </div>
      </div>
      <div className="w-full max-w-sm border rounded-lg shadow bg-gray-400 m-5 h-96">
        <a href="#"></a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 truncate"></h5>
          </a>

          <div className="flex items-center justify-between mt-3">
            <span className="text-3xl font-bold text-gray-900"></span>
          </div>
        </div>
      </div>
      <div className="w-full max-w-sm border rounded-lg shadow bg-gray-400 m-5 h-96">
        <a href="#"></a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 truncate"></h5>
          </a>

          <div className="flex items-center justify-between mt-3">
            <span className="text-3xl font-bold text-gray-900"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default loading;
