import { FaFacebook } from 'react-icons/fa'
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FiTwitter } from "react-icons/fi";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-300 my-5 text-base-content">
            <nav>
                <header className="footer-title">Hospital</header>
                <a className="link link-hover">Services</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <header className="footer-title">Company</header>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <header className="footer-title">Social Media</header>
                <div className="grid grid-flow-col gap-4">
                    <Link>
                        <FaYoutube className='text-2xl text-red-600' />
                    </Link>
                    <Link>
                        <FaLinkedin className='text-2xl text-sky-800' />
                    </Link>
                    <Link>
                        <MdOutlineMail className='text-red-600 text-2xl' />
                    </Link>
                    <Link>
                        <FaFacebook className='text-2xl text-sky-600' />
                    </Link>
                    <Link>
                        <FcGoogle className='text-2xl' />
                    </Link>
                    <Link>
                        <FiTwitter className='text-2xl text-sky-400' />
                    </Link>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;