import Head from "next/head";
import Image from "next/image";
import { Banner, ServiceToggle } from "../components";
import lawnMower from "../assets/lawn_mower.jpg";

const Home = () => {
  return (
    <div className="flex flex-col justify-between">
      <div className="pt-2 max-w-screen-2xl mx-auto">
        <Banner />
      </div>
      <div className="bg-slate-100 px-8 py-10 flex flex-col lg:flex-row justify-between items-center">
        <div className="w-full lg:w-1/2 pb-6 lg:pb-0">
          <h1 className="text-4xl pb-4 ">About us</h1>
          <p className="font-thin text-xl">
            Summer Breeze is a full service lawn care company that is locally
            owned and operated in Mansfield Texas since 2003. We provide quality
            lawn care and landscaping to residential and commercial properties
            loctated throughout our service area. Our employees are skilled,
            friendly, uniformed professionals, using top quality commercial
            equipment
          </p>
        </div>
        <div>
          <Image
            src={lawnMower}
            alt="lawn_mower"
            className="rounded-lg object-contain"
            width={500}
            height={500}
          ></Image>
        </div>
      </div>
      <div className="justify-center">
        <ServiceToggle />
      </div>
    </div>
  );
};

export default Home;
