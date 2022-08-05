import React from "react";
import { FaSpinner } from 'react-icons/fa';

const Loader = () => {
  return (
    <>
      <div className="flex justify-center m-20">
        <span className="animate-spin h-5 w-5 text-3xl p-80" >
          <FaSpinner />
        </span>
      </div>
    </>
  );
};

export default Loader;
