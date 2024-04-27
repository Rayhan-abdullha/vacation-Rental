import { FaChevronRight, FaFacebookF, FaInstagram, FaPaperPlane, FaTwitter } from "react-icons/fa"
import { Link } from "react-router-dom"
import './footer.css'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="my-container grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="footer-rent-heading">
                    <h2 className="footer-heading"><a href="#" className="logo">Vacation Rental</a></h2>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    <a href="#" className="flex items-center gap-[2px] mt-5">Read more <span><FaChevronRight className="text-[12px]" /></span></a>
                </div>
                <div className="services-items">
                    <h2 className="footer-heading">Services</h2>
                    <ul className="list-unstyled">
                        <li><a href="#" className="py-1 block">Map Direction</a></li>
                        <li><a href="#" className="py-1 block">Accomodation Services</a></li>
                        <li><a href="#" className="py-1 block">Great Experience</a></li>
                        <li><a href="#" className="py-1 block">Perfect central location</a></li>
                    </ul>
                </div>
                <div className="md:mb-0 mb-4">
                    <h2 className="footer-heading">Tag cloud</h2>
                    <div className="tagcloud">
                        <a href="#" className="tag-cloud-link">apartment</a>
                        <a href="#" className="tag-cloud-link">home</a>
                        <a href="#" className="tag-cloud-link">vacation</a>
                        <a href="#" className="tag-cloud-link">rental</a>
                        <a href="#" className="tag-cloud-link">rent</a>
                        <a href="#" className="tag-cloud-link">house</a>
                        <a href="#" className="tag-cloud-link">place</a>
                        <a href="#" className="tag-cloud-link">drinks</a>
                    </div>
                </div>
                <div className="md:mb-0 mb-4">
                    <h2 className="footer-heading">Subcribe</h2>
                    <form action="#" className="subscribe-form">
                        <div className="form-group flex">
                            <input type="text" className="px-3 rounded-left w-[80%] sm:w-auto" placeholder="Enter email address"/>
                            <button type="submit" className="submit rounded-right w-[20%] sm:w-auto flex justify-center items-center"><FaPaperPlane /></button>
                        </div>
                    </form>
                    <h2 className="footer-heading mt-5">Follow us</h2>
                    <ul className="ftco-footer-social flex gap-4 p-0">
                        <li className="">
                            <Link to="#" className="block p-3 text-[18px]">
                                <FaTwitter/>
                            </Link>
                        </li>
                        <li className="">
                            <Link to="#" className="block p-3 text-[18px]">
                                <FaFacebookF/>
                            </Link>
                        </li>
                        <li className="">
                            <Link to="#" className="block p-3 text-[18px]">
                                <FaInstagram/>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-[100%] mt-[50px] border-top py-[50px]">
                <div className="my-container flex flex-col items-center md:flex-row md:justify-between gap-5">
                    <p className="copyright mb-0 text-center md:text-start">
                        Copyright © 2024 All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib.com</a>
                    </p>
                    <p className="mb-0 list-unstyled flex gap-5">
                        <Link to="#">Terms</Link>
                        <Link to="#">Privacy</Link>
                        <Link to="#">Compliances</Link>
                    </p>
                </div>
            </div>
    </footer>
    )
}
export default Footer