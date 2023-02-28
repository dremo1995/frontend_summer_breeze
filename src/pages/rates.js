import React from "react";
import Link from "next/link";
import Image from "next/image";
import residentialImg from "../assets/residential.jpeg";

const rates = () => {
  return (
    <div>
      <div className="flex justify-center md:justify-between items-center px-4 py-14 bg-slate-100">
        <h2 className="text-5xl font-thin">Rates</h2>
        <p className="hidden md:flex">
          <Link href="/" className="hover:text-blue-500">
            Home
          </Link>{" "}
          / Rates
        </p>
      </div>
      <div className="flex md:flex-row flex-col-reverse md:justify-between  items-center py-10 ">
        <div className="w-full md:w-1/3 px-8  mx-auto">
          <h2 className="text-3xl font-thin">Basic Mow/Edging Service</h2>
          <p className="text-lg font-thin py-6 pr-4">Includes:</p>
          <ol className="text-md font-thin ">
            <li className="py-2">Mowing front, side & backyard</li>
            <li className="py-2">
              Edge driveway, sidewalk areas with steel blade
            </li>
            <li className="py-2">
              Line trim around beds, fence, AC, and areas not accessible with
              mower
            </li>
            <li className="py-2">
              Blow off all sidewalks, entrances, porches, patios and driveways
            </li>
          </ol>
          <p className="font-thin pt-6">*(based on standard sized lot)*</p>
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
      <div className="py-6 bg-slate-100">
        <h2 className="text-4xl font-thin text-center py-10">Pricing</h2>
        <div className="px-8 md:flex md:justify-around items-center">
          <div className="pb-4 md:pb-0 px-4">
            <Image
              src={residentialImg}
              alt="residential_image"
              height={300}
              width={600}
              className="rounded-xl"
            />
          </div>

          <div className="grid grid-cols-2 md:w-[50%] gap-2">
            <div className="border-2 w-full p-2 m-2 rounded-lg bg-white text-xl">
              Lot Size:
            </div>
            <div className="border-2 w-full p-2 m-2 rounded-lg bg-white text-xl">
              Weekly Rate:
            </div>

            <div className="border-2 w-full p-2 m-2 rounded-lg bg-white">
              0 to 5,000 sqft
            </div>
            <div className="border-2 w-full p-2 m-2 rounded-lg bg-white">
              $38
            </div>

            <div className="border-2 w-full p-2 m-2 rounded-lg bg-white">
              5,500 to 10,000 sqft
            </div>
            <div className="border-2 w-full p-2 m-2 rounded-lg bg-white">
              $40
            </div>

            <div className="border-2 w-full p-2 m-2 rounded-lg bg-white">
              10,500 to 12,000 sqft
            </div>
            <div className="border-2 w-full p-2 m-2 rounded-lg bg-white">
              $45
            </div>

            <div className="border-2 w-full p-2 m-2 rounded-lg bg-white">
              12,500 to 16,000 sqft
            </div>
            <div className="border-2 w-full p-2 m-2 rounded-lg bg-white">
              $50
            </div>

            <div className="border-2 w-full p-2 m-2 rounded-lg bg-white">
              16,500 to 20,000 sqft
            </div>
            <div className="border-2 w-full p-2 m-2 rounded-lg bg-white">
              $38
            </div>

            <div className="border-2 w-full p-2 m-2 rounded-lg bg-white">
              20,500 sqft or more
            </div>
            <div className="border-2 w-full p-2 m-2 rounded-lg bg-white">
              Contact us
            </div>
          </div>
        </div>
        <div className="text-center font-thin pt-4">
          <p className="py-2">
            All prices listed above are before applicable sales tax required by
            Texas Law
          </p>

          <p className="py-2 text-2xl">Standard Lot Size</p>

          <p className="py-2">
            Our standard rates are based on a lot size up to 10,000 total gross
            square feet before any improvements.
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col-reverse md:justify-between  items-center py-10 ">
        <div className="w-full md:w-1/3 px-8  mx-auto">
          <h2 className="text-3xl font-thin">Full Service Maintenance plans</h2>
          <p className="text-lg font-thin py-6 pr-4">
            Our Full service weekly plan is flat monthly rate plan starting at
            $170.00 per month and requires a 12 month contract. Call our office
            for details and a free estimate.
          </p>
          <h2 className="text-3xl font-thin pb-4">Includes:</h2>
          <p className=" font-thin ">Weekly mowing service</p>
          <p className=" font-thin ">Quarterly shrub trimming</p>
          <p className=" font-thin ">Monthly bed de-weeding</p>
          <p className=" font-thin ">Lawn Fertilizer</p>
          <p className=" font-thin ">Lawn weed control</p>
          <p className=" font-thin ">Seasonal Clean-ups (leaf pickup)</p>
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
      <div className="py-10 bg-slate-100 text-center font-thin px-4">
        <h2 className="text-4xl pb-6">Other Service Rates</h2>
        <div className="grid grid-cols-1 gap-6  lg:grid-cols-3 items-center">
          <div className="">
            <h2 className="text-2xl pb-4">Bed cleaning/shrub trimming</h2>
            <p>$95.00 per hour (1 hour minimum)</p>
          </div>
          <div>
            <h2 className="text-2xl pb-4"> Seasonal Flowers Installation</h2>
            <p>
              $35.00 per flat (4 flat minimum) (18- 4″ pots per flat) Winter
              flowers: Pansies, kale, dusty miller Spring/summer flowers:
              petunias, begonias, impatiens, marigolds, zinas
            </p>
          </div>
          <div>
            <h2 className="text-2xl pb-4">Mulch Installation</h2>
            <p>
              (2 cubic feet bags) brown shredded hardwood mulch- $7.50 per bag
              black shredded hardwood mulch- $8.50 per bag red shredded hardwood
              mulch- $8.50 per bag brown pine bark mulch- $7.50 per bag (3 cubic
              bag) cypress mulch- $8.50 per bag cedar mulch- $8.50 per bag
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default rates;
