import React from "react";

const Page = () => {
  return (
    <main className="root-container flex min-h-screen flex-col items-center justify-center">
      <h1 className="font-bebas-neue text-5xl font-bold text-light-100">
        Hold On – You're Going a Bit Too Fast
      </h1>
      <p className="mt-3 max-w-xl text-center text-light-400">
        For security reasons, we've temporarily limited access due to high
        activity. Please wait a moment and try again. We appreciate your
        patience and understanding.
      </p>
    </main>
  );
};

export default Page;
