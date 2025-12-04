"use client";
import React, { useEffect, useState } from "react";
import Container from "./Container";
const Love = () => {
  const [active, setActive] = useState("regions");
  const [loading,setLoading] = useState(false)
  const tabBtn ="inline-block p-4 border-b-2 rounded-t-base transition-all duration-300 hover:scale-105";
  useEffect(()=> {
    const time = setTimeout(()=> {
      setLoading(false)
    }, 1000)
  }, [loading])
  return (
    <div>
      <Container>
        <div className="">
          <h4 className="font-jost text-3xl">Destinations we love</h4>
          <p className="font-jost text-sm text-[#697488] py-2 ">
            Interdum et malesuada fames ac ante ipsum
          </p>
        </div>
        <div className="mb-4">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
          <li className="me-2">
            <button
              onClick={() => {
                setLoading(true)
                setActive("regions")
              }}
              className={`${tabBtn} ${
                active === "regions"
                  ? "border-[#3554D1] scale-110"
                  : "border-transparent"
              }`}
            >
              Regions
            </button>
          </li>

          <li className="me-2">
            <button
              onClick={() => {
                setLoading(true)
                setActive("cities")
              }}
              className={`${tabBtn} ${
                active === "cities"
                  ? "border-[#3554D1] scale-110"
                  : "border-transparent"
              }`}
            >
              Cities
            </button>
          </li>

          <li className="me-2">
            <button
              onClick={() => {
                setLoading(true)
                setActive("places")
              }}
              className={`${tabBtn} ${
                active === "places"
                  ? "border-[#3554D1] scale-110"
                  : "border-transparent"
              }`}
            >
              Places of interest
            </button>
          </li>
        </ul>
      </div>

      <div className="bg-neutral-secondary-soft p-4 rounded-base">
        {active === "regions" && (
          <div>
            { loading && <div className="w-[1248px] h-[176px] flex justify-center items-center">
              <div className="w-10 h-10 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
          </div> }
            {!loading &&(
          <div className="flex">
            <div className="w-1/5 ">
                <ul>
                  <li>
                    <h6 className="font-jost text-[16px]">Hawai</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                  <li>
                    <h6 className="font-jost text-[16px]">Santorini</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                  <li>
                    <h6 className="font-jost text-[16px]">Mykonos</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                  <li>
                    <h6 className="font-jost text-[16px]">Jersey</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                </ul>
              </div>
              <div className="w-1/5">
                <ul>
                  <li>
                    <h6 className="font-jost text-[16px]">Istanbul</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                  <li>
                    <h6 className="font-jost text-[16px]">Los Angeles</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                  <li>
                    <h6 className="font-jost text-[16px]">London</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                  <li>
                    <h6 className="font-jost text-[16px]">Prag</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                </ul>
              </div>
              <div className="w-1/5">
                <ul>
                  <li>
                    <h6 className="font-jost text-[16px]">San Diego</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                  <li>
                    <h6 className="font-jost text-[16px]">İbiza</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                  <li>
                    <h6 className="font-jost text-[16px]">Paris</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                  <li>
                    <h6 className="font-jost text-[16px]">Amsterdam</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                </ul>
              </div>
              <div className="w-1/5">
                <ul>
                  <li>
                    <h6 className="font-jost text-[16px]">Phuket</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                  <li>
                    <h6 className="font-jost text-[16px]">Boston</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                  <li>
                    <h6 className="font-jost text-[16px]">Dubai</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                  <li>
                    <h6 className="font-jost text-[16px]">Rome</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                </ul>
              </div>
              <div className="w-1/5">
                <ul>
                  <li>
                    <h6 className="font-jost text-[16px]">Reykjavik</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                  <li>
                    <h6 className="font-jost text-[16px]">Florence</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                  <li>
                    <h6 className="font-jost text-[16px]">Krakow</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                  <li>
                    <h6 className="font-jost text-[16px]">Miami</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                </ul>
              </div>
          </div>
            )}
          </div>
        )}
        {active === "cities" && (
          <div className="">
          { loading && <div className="w-[1248px] h-[176px] flex justify-center items-center">
              <div className="w-10 h-10 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
          </div> }
            {!loading && (
              <div className="flex">
              <div className="w-1/5 ">
                <ul>
                  <li>
                    <h6 className="font-jost text-[16px]">Hawai</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                  <li>
                    <h6 className="font-jost text-[16px]">Santorini</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                  <li>
                    <h6 className="font-jost text-[16px]">Mykonos</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                  <li>
                    <h6 className="font-jost text-[16px]">Jersey</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                </ul>
              </div>
              <div className="w-1/5">
                <ul>
                  <li>
                    <h6 className="font-jost text-[16px]">Istanbul</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                  <li>
                    <h6 className="font-jost text-[16px]">Los Angeles</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                  <li>
                    <h6 className="font-jost text-[16px]">London</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                  <li>
                    <h6 className="font-jost text-[16px]">Prag</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                </ul>
              </div>
              <div className="w-1/5">
                <ul>
                  <li>
                    <h6 className="font-jost text-[16px]">San Diego</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                  <li>
                    <h6 className="font-jost text-[16px]">İbiza</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                  <li>
                    <h6 className="font-jost text-[16px]">Paris</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                  <li>
                    <h6 className="font-jost text-[16px]">Amsterdam</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                </ul>
              </div>
              <div className="w-1/5">
                <ul>
                  <li>
                    <h6 className="font-jost text-[16px]">Phuket</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                  <li>
                    <h6 className="font-jost text-[16px]">Boston</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                  <li>
                    <h6 className="font-jost text-[16px]">Dubai</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                  <li>
                    <h6 className="font-jost text-[16px]">Rome</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                </ul>
              </div>
              <div className="w-1/5">
                <ul>
                  <li>
                    <h6 className="font-jost text-[16px]">Reykjavik</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                  <li>
                    <h6 className="font-jost text-[16px]">Florence</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                  <li>
                    <h6 className="font-jost text-[16px]">Krakow</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                  <li>
                    <h6 className="font-jost text-[16px]">Miami</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                </ul>
              </div>
          </div>
        )}
        </div>
        )}
        {active === "places" && (
          <div className="">
            { loading && <div className="w-[1248px] h-[176px] flex justify-center items-center">
              <div className="w-10 h-10 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
          </div>}
          {!loading && (
          <div className="flex">
            <div className="w-1/5 ">
                <ul>
                  <li>
                    <h6 className="font-jost text-[16px]">Hawai</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                  <li>
                    <h6 className="font-jost text-[16px]">Santorini</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                  <li>
                    <h6 className="font-jost text-[16px]">Mykonos</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                  <li>
                    <h6 className="font-jost text-[16px]">Jersey</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                </ul>
              </div>
              <div className="w-1/5">
                <ul>
                  <li>
                    <h6 className="font-jost text-[16px]">Istanbul</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                  <li>
                    <h6 className="font-jost text-[16px]">Los Angeles</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                  <li>
                    <h6 className="font-jost text-[16px]">London</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                  <li>
                    <h6 className="font-jost text-[16px]">Prag</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                </ul>
              </div>
              <div className="w-1/5">
                <ul>
                  <li>
                    <h6 className="font-jost text-[16px]">San Diego</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                  <li>
                    <h6 className="font-jost text-[16px]">İbiza</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                  <li>
                    <h6 className="font-jost text-[16px]">Paris</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                  <li>
                    <h6 className="font-jost text-[16px]">Amsterdam</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                </ul>
              </div>
              <div className="w-1/5">
                <ul>
                  <li>
                    <h6 className="font-jost text-[16px]">Phuket</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                  <li>
                    <h6 className="font-jost text-[16px]">Boston</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                  <li>
                    <h6 className="font-jost text-[16px]">Dubai</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                  <li>
                    <h6 className="font-jost text-[16px]">Rome</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                </ul>
              </div>
              <div className="w-1/5">
                <ul>
                  <li>
                    <h6 className="font-jost text-[16px]">Reykjavik</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                  <li>
                    <h6 className="font-jost text-[16px]">Florence</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                  <li>
                    <h6 className="font-jost text-[16px]">Krakow</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                  <li>
                    <h6 className="font-jost text-[16px]">Miami</h6>
                    <p className="font-jost text-sm text-[#697488]">
                      12,683 properties
                    </p>
                  </li>
                </ul>
              </div>
          </div>
           )}
          </div>
        )}
      </div>

      </Container>
    </div>
  );
};

export default Love;
