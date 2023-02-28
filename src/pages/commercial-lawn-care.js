import React from "react";
import Image from "next/image";
import Link from "next/link";
import commercialImg from "../assets/commercial.jpeg";
import { comProGrounds, comLandscapeService } from "@/constants";
import { DisplayServices } from "@/components";

const commercialLawnCare = () => {
  return (
    <div className="">
      <div className="flex justify-center md:justify-between items-center px-4 py-14 bg-slate-100">
        <h2 className="text-5xl font-thin">Commercial Service</h2>
        <p className="hidden md:flex">
          <Link href="/" className="hover:text-blue-500">
            Home
          </Link>{" "}
          / Commercial Lawn Service
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
            src={commercialImg}
            alt="residential_image"
            height={300}
            width={600}
            className="rounded-xl"
          />
        </div>
      </div>
      <div className="justify-center text-center py-10 bg-slate-100">
        <h2 className="text-4xl font-thin pb-5">
          Commercial Landscape & Grounds Maintenance
        </h2>
        <p className="text-xl font-thin px-6">
          At Summer Breeze Lawn Care we provide a wide range of landscape and
          grounds maintenance services to several properties in the DFW
          Metroplex. We will customize a landscape maintenance program to fit
          your budget & needs.
        </p>
        <div className="py-6">
          <h2 className="text-4xl font-thin pb-5">Landscape Services</h2>
          <DisplayServices
            services={comLandscapeService}
            nameStyle="text-2xl font-extralight pb-4"
            descriptionStyle="font-thin text-md text-left"
          />
        </div>
        <div className="py-6">
          <h2 className="text-4xl font-thin pb-5">
            Professional Grounds Maintenance
          </h2>
          <DisplayServices
            services={comProGrounds}
            nameStyle="text-2xl font-extralight pb-4"
            descriptionStyle="font-thin text-md text-left"
          />
        </div>
        <p className="font-thin">
          For a free estimate{" "}
          <a className="text-green-700 hover:cursor-pointer">
            info@summerbreezelawncare.com
          </a>
          , or call our office at{" "}
          <a className="text-green-700 hover:cursor-pointer">817-539-0401</a>
        </p>
      </div>
    </div>
  );
};

export default commercialLawnCare;
