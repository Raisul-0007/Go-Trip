"use client";
import React, { useState } from "react";
import Container from "./Container";
const Love = () => {
  const [active, setActive] = useState(true);
  const [loading,setLoading] = useState()
  const tabBtn ="inline-block p-4 border-b-2 rounded-t-base transition-all duration-300 hover:scale-105";
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
              onClick={() => setActive("regions")}
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
              onClick={() => setActive("cities")}
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
              onClick={() => setActive("places")}
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
        {active === "cities" && (
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
        {active === "places" && (
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

{/*         
        <div className="mb-4 ">
          <ul
            className="flex flex-wrap -mb-px text-sm font-medium text-center"
            id="default-tab"
            data-tabs-toggle="#default-tab-content"
            role="tablist"
          >
            <li className="me-2" role="presentation">
              <button
                className="inline-block p-4 border-b-2 rounded-t-base transition-all duration-300 hover:scale-105 data-[active]:scale-110"
                id="profile-tab"
                data-tabs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Regions
              </button>
            </li>
            <li className="me-2" role="presentation">
              <button
                className="inline-block p-4 border-b-2 rounded-t-base transition-all duration-100 hover:scale-105 data-[active]:scale-110"
                id="dashboard-tab"
                data-tabs-target="#dashboard"
                type="button"
                role="tab"
                aria-controls="dashboard"
                aria-selected="false"
              >
                Cities
              </button>
            </li>
            <li className="me-2" role="presentation">
              <button
                className="inline-block p-4 border-b-2 rounded-t-base transition-all duration-300 hover:scale-105 data-[active]:scale-110"
                id="settings-tab"
                data-tabs-target="#settings"
                type="button"
                role="tab"
                aria-controls="settings"
                aria-selected="false"
              >
                Places of interest
              </button>
            </li>
          </ul>
        </div>
        <div id="default-tab-content">
          <div
            className="hidden p-4 rounded-base bg-neutral-secondary-soft"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
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
          </div>
          <div
            className="hidden p-4 rounded-base bg-neutral-secondary-soft"
            id="dashboard"
            role="tabpanel"
            aria-labelledby="dashboard-tab"
          >
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
          </div>
          <div
            className="hidden p-4 rounded-base bg-neutral-secondary-soft"
            id="settings"
            role="tabpanel"
            aria-labelledby="settings-tab"
          >
            <div className="flex">
              
            </div>
          </div>
        </div> */}
      </Container>
    </div>
  );
};

export default Love;
