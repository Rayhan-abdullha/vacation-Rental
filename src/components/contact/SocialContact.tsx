import { BiWorld } from "react-icons/bi"
import { FaPhone } from "react-icons/fa"
import { SiMinutemailer } from "react-icons/si"
import { SlLocationPin } from "react-icons/sl"
const SocialContact= () => {

    return (
        <div className="bg-[#fd7792] p-[48px] col-span-4">
            <div>
                <h3 className="text-white mb-1 text-[30px] font-family-secondary font-bold">Let's get in touch</h3>
                <p className="text-[#ffffffcc] mb-[24px]">We're open for any suggestion or just to have a chat</p>
            </div>
            <div className="contactInfo flex flex-col gap-[25px]">
                <div className="flex gap-5 items-center">
                    <div className="border rounded-full p-3" style={{border: '2px solid rgba(255, 255, 255, 0.2)'}}>
                        <SlLocationPin className="text-white text-[18px]"/>
                    </div>
                    <p className="text-[#ffffffcc]">Address: 198 West 21th Street, Suite 721 New York NY 10016</p>
                </div>
                <div className="flex gap-5 items-center">
                    <div className="border rounded-full p-3" style={{border: '2px solid rgba(255, 255, 255, 0.2)'}}>
                        <FaPhone className="text-white text-[18px]"/>
                    </div>
                    <p className="text-[#ffffffcc]">Phone: + 1235 2355 98</p>
                </div>
                <div className="flex gap-5 items-center">
                    <div className="border rounded-full p-3" style={{border: '2px solid rgba(255, 255, 255, 0.2)'}}>
                        <SiMinutemailer className="text-white text-[18px]"/>
                    </div>
                    <p className="text-[#ffffffcc]">Email: info@yoursite.com</p>
                </div>
                <div className="flex gap-5 items-center">
                    <div className="border rounded-full p-3" style={{border: '2px solid rgba(255, 255, 255, 0.2)'}}>
                        <BiWorld className="text-white text-[18px]"/>
                    </div>
                    <p className="text-[#ffffffcc]">Website yoursite.com</p>
                </div>
            </div>
        </div>
    )
}
export default SocialContact