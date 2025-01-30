import React from 'react';

const Loader = ({ text }) => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      <p className="ml-4 text-primary font-semibold">{text || "Loading..."}</p>
    </div>
  );
};

export default Loader;