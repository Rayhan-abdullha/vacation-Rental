import { FaDribbble, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"
const Top = () => {

    return (
        <div className=" bg-1 py-1">
            <div className="my-container flex justify-between gap-5 items-center">
                <p className="color-1 text-[12px]">Phone no: <a href="#" className="text-white">+00 1234 567</a> or email us: <a href="#" className="text-white">emailsample@email.com</a></p>
                <div className="flex gap-5">
                    <a href="" target="_blank">
                        <FaFacebookF className="text-white text-[14px]"/>
                    </a>
                    <a href="" target="_blank">
                        <FaTwitter className="text-white text-[14px]"/>
                
                    </a>
                    <a href="" target="_blank">
                        <FaInstagram className="text-white text-[14px]"/>
                    </a>
                    <a href="" target="_blank">
                        <FaDribbble className="text-white text-[14px]"/>
                    </a>
                </div>
           </div>
        </div>
    )
}
export default Top