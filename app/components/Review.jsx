import React from "react";
import Container from "./Container";
import Image from "next/image";
const Review = () => {
  return (
    <div className="bg-[#E5F0FD]">
      <Container className="flex">
        <div className="w-1/2 px-25 py-20">
          <h4 className="font-jost text-3xl font-bold pr-20 py-8">
            What our customers are saying us?
          </h4>
          <p className="font-jost text-sm text-[#697488]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim
            justo.
          </p>
          <div className="flex gap-30 py-15">
            <div className="">
              <h4 className="font-jost text-3xl font-bold">13m+</h4>
              <p className="font-jost text-sm text-[#697488]">Happy People</p>
            </div>
            <div className="">
              <h4 className="font-jost text-3xl font-bold">4.88</h4>
              <p className="font-jost text-sm text-[#697488]">Overall rating</p>
            </div>
          </div>
        </div>
        <div className="w-1/2 px-5 ">
          <div className="flex gap-5 items-center pb-5">
            <Image src="/reviews.png" alt="" height="80" width="80" />
            <div className="">
              <h5 className="font-jost text-[16px]">Annette Black</h5>
              <p className="font-jost text-sm text-[#697488]">
                UX / UI Designer
              </p>
            </div>
          </div>
          <div className="">
            <h6 className="font-jost text-[18px] py-5">
              The place is in a great location in Gumbet. The area is safe and
              beautiful. The apartment was comfortable and the host was kind and
              responsive to our requests.
            </h6>
            <div className="flex gap-5 items-center">
              <p>01</p>
              <svg
                width="300"
                height="2"
                viewBox="0 0 300 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="300" height="2" fill="#DDDDDD" />
                <rect width="72" height="2" fill="#051036" />
              </svg>
              <p>05</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Review;
