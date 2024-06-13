import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
  return (
    <>
      <NavBar />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="max-w-screen-xl mx-2 lg:mx-auto">
        <Outlet />
      </div>
    </>
  );
};

export default Root;
