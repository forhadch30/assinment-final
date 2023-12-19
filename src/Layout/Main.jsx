import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Sheard/Footer/Footer";
import Navbar from "../Pages/Sheard/Navbar/Navbar";

const Main = () => {
    const location = useLocation()
    const noheaderFooter = location.pathname.includes('login') || 
    location.pathname.includes('signup')
    return (
        <div>
            {noheaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noheaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;