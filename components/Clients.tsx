import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/data";

const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        Kind words from <span className="text-deepgreen-accent"> satisfied clients</span>
      </h1>
      <div className="flex flex-col items-center mt-12">
        <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
        {/* <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 mt-12">
          {companies.map(({id, img, name, nameImg}) => (
            <div key={id} className="flex md:max-w-60 maxz-w-32 gap-2">
              <img src={img} alt={name} className="md:w-10 w-5" />
              <img src={nameImg} alt={name} className="md:w-24 w-20" />
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Clients;
