import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Root = () => {
  return (
    <>
      <NavBar />
      <div className="max-w-screen-xl mx-2 lg:mx-auto">
        <Outlet />
      </div>
    </>
  );
};

export default Root;
