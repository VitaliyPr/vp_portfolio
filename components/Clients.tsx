import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { testimonials } from "@/data";

const Clients = () => {
  return (
    <div className="py-20 max-md:py-10" id="testimonials">
      <h1 className="heading">
        Kind words from <span className="text-deepgreen-accent"> satisfied clients</span>
      </h1>
      <div className="flex flex-col items-center mt-12">
        <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
      </div>
    </div>
  );
};

export default Clients;
