import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import { IoLogoApple } from 'react-icons/io';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error)
            })
    }
    const navLink = <>
        <li><Link to='/' className="text-yellow-400 text-xl">Home</Link></li>
        <li><Link to='/bannersImg' className="text-yellow-400 text-xl">Your Best Foods</Link></li>
        <li><Link to='/operation' className="text-yellow-400 text-xl">Operation</Link></li>
        <li><Link to="/secret" className="text-yellow-400 text-xl">Secret</Link></li>
        <li>
            <Link to="/">
                <button className="btn">
                    <IoLogoApple className="text-xl" />
                    <div className="badge badge-secondary">+0</div>
                </button>
            </Link>
        </li>
        {
            user ? <>
                {/* <span>{user?.displayName}</span> */}
                <button onClick={handleLogOut} className="btn btn-ghost text-white">Log Out</button>
            </> :
                <>
                    <li><Link to='/login' className="text-white">Login</Link></li>
                </>
        }
    </>

    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 max-w-5xl bg-sky-400">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl text-white">Assinment</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="/login">
                        <button className="btn btn-outline btn-secondary border-0 border-b-4">Login</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;