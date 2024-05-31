import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    const navigationList = <>
        <li className="mx-2 text-white"><NavLink className={({ isActive }) => isActive ? "font-semibold" : ""} to="/">Home</NavLink></li>
        <li className="mx-2 text-white"><NavLink className={({ isActive }) => isActive ? "font-semibold" : ""} to="/about">Home</NavLink></li>
        <li className="mx-2 text-white"><NavLink className={({ isActive }) => isActive ? "font-semibold" : ""} to="/services">Home</NavLink></li>
    </>
    return (
        <>
            <header>
                <nav>
                    <div className="navbar max-w-screen-xl mx-2 lg:mx-auto">
                        <div className="lg:navbar-start justify-between w-full">
                            <div className="dropdown">
                                <label tabIndex={0} className="btn bg-white border-[#ffa611] outline-[#ffa611] shadow-none hover:bg-[#ffa611] hover:text-white text-[#ffa611] lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#ffa611] rounded-box w-52">
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
                            <div className="flex gap-2">
                                <Link to="/registration" className="text-[#ffa611] border-2 border-[#ffa611] rounded px-4 py-1 font-semibold">Sign Up</Link>
                                <Link to="/login" className="text-[#ffa611] border-2 border-[#ffa611] rounded px-4 py-1 font-semibold">Login</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default NavBar