import React from "react";

function Loading() {
  //this is loading component
  return (
    <div className="flex justify-center items-center mb-5">
      <div
        className="spinner-border
         animate-spin
         inline-block
         w-20
         h-20
         border-4
         rounded-full
         text-yellow-500"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;
