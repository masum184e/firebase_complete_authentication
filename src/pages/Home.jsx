import { Link } from "react-router-dom";

import { FaAnglesRight } from "react-icons/fa6";
import { GrGraphQl } from "react-icons/gr";
import { SiExpress } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiAdguard } from "react-icons/si";
import { TbBrandOauth } from "react-icons/tb";

const Home = () => {
  return (
    <>
      <div className="flex">
        <div className="flex-1 pt-20">
          <h3 className="text-[#29444d] text-xl font-semibold mb-4">
            Why Firebase _____
          </h3>
          <h1 className="text-6xl font-bold text-[#29444d]">
            <span
              style={{
                color: "transparent",
                WebkitTextStroke: "1px yellow",
              }}
            >
              Your Privacy
            </span>
            <br />
            <span className="">Our</span>
            <span className="ml-2 text-[#fea511]">Concern</span>
          </h1>
          <p className="my-4">
            Firebase Authentication provides a robust, secure, and
            easy-to-integrate solution for handling user authentication in your
            web application.
          </p>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            to="https://firebase.google.com/docs/auth"
            className="rounded-full font-semibold bg-[#fea511] text-white px-4 p-1 inline-flex items-center gap-2"
          >
            <span> Get Started</span>
            <FaAnglesRight className="animate-pulse" />
          </Link>
        </div>
        <div className="flex-1">
          <img className="ml-auto" src="/images/banner.jpg" alt="BANNER" />
        </div>
      </div>
      <div className="flex justify-between">
        <Link className="border-[#fea511] border-2 w-50 h-50 flex flex-col rounded p-5 text-[#ee0097]">
          <GrGraphQl className="mx-auto text-4xl" />
          <h4>GraphQL Authentication</h4>
        </Link>
        <Link className="border-[#fea511] border-2 w-50 h-50 flex flex-col rounded p-5">
          <SiExpress className="mx-auto text-4xl bg-gray-400 rounded-full p-1" />
          <h4 className="text-gray-400">ExpressJS Authentication</h4>
        </Link>
        <Link className="border-[#fea511] border-2 w-50 h-50 flex flex-col rounded p-5">
          <TbBrandNextjs className="mx-auto text-4xl" />
          <h4>NextJS Authentication</h4>
        </Link>
        <Link className="border-[#fea511] border-2 w-50 h-50 flex flex-col rounded p-5 text-[#21bcfd]">
          <SiAdguard className="mx-auto text-4xl" />
          <h4>Next Auth Authentication</h4>
        </Link>
        <Link className="border-[#fea511] border-2 w-50 h-50 flex flex-col rounded p-5">
          <TbBrandOauth className="mx-auto text-4xl" />
          <h4>OAuth Authentication</h4>
        </Link>
      </div>
    </>
  );
};

export default Home;
