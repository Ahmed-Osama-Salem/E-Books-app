import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Content() {
  //This component for contact us section.
  //use AOS package for scroll animation.
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section class="container mx-auto text-center py-6 mb-12 foot">
      <h2
        data-aos="zoom-in"
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-black"
      >
        Contact us
      </h2>
      <div class="w-full mb-4">
        <div class="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
      <h3 data-aos="zoom-in-up" class="my-4 text-3xl leading-tight text-gray">
        We are happy to Send us your feedback
      </h3>
      <button class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
        Contact
      </button>
    </section>
  );
}

export default Content;
