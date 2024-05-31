import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import { FaAnglesRight } from "react-icons/fa6";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="max-w-screen-xl mx-2 lg:mx-auto border-1 border-red-500">
        <div className="flex items-center">
          <div className="flex-1">
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
              easy-to-integrate solution for handling user authentication in
              your web application.
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
      </div>
    </div>
  );
};

export default Home;
