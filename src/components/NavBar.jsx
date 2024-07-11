import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const NavBar = () => {
  const { loggedInUserData, logOut } = useAuth();
  const navigate = useNavigate();
  const navigationList = (
    <>
      <li className="mx-2 text-white">
        <NavLink
          className={({ isActive }) => (isActive ? "font-semibold" : "")}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className="mx-2 text-white">
        <NavLink
          className={({ isActive }) => (isActive ? "font-semibold" : "")}
          to="https://nextjs-complete-authentication.vercel.app/"
        >
          NextAuth
        </NavLink>
      </li>
      <li className="mx-2 text-white">
        <NavLink
          className={({ isActive }) => (isActive ? "font-semibold" : "")}
          to="https://github.com/masum184e/firebase_complete_authentication"
        >
          OAuth
        </NavLink>
      </li>
    </>
  );
  const handleSignOut = async () => {
    try {
      await logOut();
      console.log("Sign Out");
      navigate(location?.state ?? "/login");
    } catch (error) {
      console.error("Sign Out Failed:", error);
    }
  };
  return (
    <>
      <header>
        <nav>
          <div className="navbar max-w-screen-xl mx-2 lg:mx-auto">
            <div className="lg:navbar-start justify-between w-full">
              <div className="dropdown">
                <label
                  tabIndex={0}
                  className="btn bg-white border-[#ffa611] outline-[#ffa611] shadow-none hover:bg-[#ffa611] hover:text-white text-[#ffa611] lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#ffa611] rounded-box w-52"
                >
                  {navigationList}
                </ul>
              </div>
              <Link to="/" className="flex items-center">
                <img className="w-12" src="/images/logo.png" alt="FLAMEGUARD" />
                <h1 className="font-bold text-4xl text-[#ffa611]">Firebase</h1>
              </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu-horizontal bg-[#ffa611] rounded-full py-2 px-4">
                {navigationList}
              </ul>
            </div>
            <div className="navbar-end hidden lg:flex">
              {loggedInUserData ? (
                <details className="dropdown dropdown-end dropdown-bottom">
                  <summary className="btn border-0 shadow-none outline-none focus:border-none focus:outline-none border-transparent bg-transparent hover:bg-transparent p-0">
                    <img
                      className="rounded-full h-10 ml-2 border-2 border-[#fea511] bg-[#fea511]"
                      src={
                        loggedInUserData.photoURL
                          ? loggedInUserData.photoURL
                          : "/images/avatar.jpg"
                      }
                      alt={
                        loggedInUserData.displayName
                          ? loggedInUserData.displayName
                          : "USER"
                      }
                    />
                  </summary>
                  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li className="mx-4 mt-2 font-bold text-blue-500 disabled">
                      {loggedInUserData.displayName}
                    </li>
                    <li>
                      <Link to="/profile">Profile</Link>
                    </li>
                    <li onClick={handleSignOut}>
                      <a>Log Out</a>
                    </li>
                  </ul>
                </details>
              ) : (
                <div className="flex gap-2">
                  <Link
                    to="/registration"
                    className="text-[#ffa611] border-2 border-[#ffa611] rounded px-4 py-1 font-semibold"
                  >
                    Sign Up
                  </Link>
                  <Link
                    to="/login"
                    className="text-[#ffa611] border-2 border-[#ffa611] rounded px-4 py-1 font-semibold"
                  >
                    Login
                  </Link>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
