import React from "react";
import Link from "next/link";
import Image from "next/image";
import residentialImg from "../assets/residential.jpeg";
import { DisplayServices } from "@/components";
import { resServices, resPolicies } from "../constants";
import { ponyfillGlobal } from "@mui/utils";

const residentialLawnCare = () => {
  return (
    <div className="">
      <div className="flex justify-center md:justify-between items-center px-4 py-14 bg-slate-100">
        <h2 className="text-5xl font-thin">Residential Service</h2>
        <p className="hidden md:flex">
          <Link href="/" className="hover:text-blue-500">
            Home
          </Link>{" "}
          / Residential Lawn Service
        </p>
      </div>

      <div className="flex md:flex-row flex-col-reverse md:justify-between  items-center py-10 ">
        <div className="w-full md:w-1/3 px-8  mx-auto">
          <h2 className="text-3xl font-thin">Our Services</h2>
          <p className="text-lg font-thin py-6 pr-4">
            Proper lawn care is important and ensures protection and longevity
            for your lawn. Let us help you care for your yard.
          </p>
          <button className="bg-green-700 text-white text-[14px] p-3 rounded-md uppercase font-light">
            View Rates
          </button>
        </div>
        <div className="pb-4 md:pb-0 px-4">
          <Image
            src={residentialImg}
            alt="residential_image"
            height={300}
            width={600}
            className="rounded-xl"
          />
        </div>
      </div>
      <div className="justify-center text-center py-10 bg-slate-100">
        <h2 className="text-4xl font-thin pb-5">
          Main Residential Lawn Care Services
        </h2>
        <p className="text-xl font-thin px-6">
          At Summer Breeze Lawn Care we provide a wide range of residential lawn
          care services to meet your needs and budget.
        </p>
        <div className="py-6">
          <DisplayServices
            services={resServices}
            nameStyle="text-2xl font-extralight pb-4"
            descriptionStyle="font-thin text-md text-left"
          />
        </div>
      </div>
      <div className="flex md:flex-row flex-col-reverse justify-center md:justify-around  items-center py-10 ">
        <div className="pt-4 md:pb-0 px-4">
          <Image
            src={residentialImg}
            alt="residential_image"
            height={300}
            width={600}
            className="rounded-xl"
          />
        </div>
        <div className="w-full md:w-1/3 px-8 justify-center mx-auto text-center md:text-left">
          <h2 className="text-3xl font-thin">Other Residential Services</h2>
          <ul className="text-lg font-thin py-6 pr-4 ">
            <li>Seasonal flowers</li>
            <li>Fall and Spring Clean up</li>
            <li>Lanscaping</li>
            <li>Landscape Lighting</li>
            <li>Turf Aeration</li>
            <li>Sod Installation</li>
            <li>Tree Planting</li>
          </ul>
          <button className="bg-green-700 text-white text-[14px] p-3 rounded-md uppercase font-light">
            View Rates
          </button>
        </div>
      </div>
      <div className="bg-slate-100 py-12 ">
        <h2 className="text-center text-3xl font-thin">
          Residential Lawn Care Policies
        </h2>
        {resPolicies.map((policy) => (
          <div key={policy.title} className="px-10 py-4">
            <h2 className="pb-4 text-2xl font-extralight text-center md:text-left">
              {policy.title}
            </h2>
            <p className="text-lg font-thin">{policy.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default residentialLawnCare;
