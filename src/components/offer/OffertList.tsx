import { FaWifi } from "react-icons/fa"

const OfferList = () => {

    return (
        <div className="flex gap-5 items-center">
            <div className="rounded-full  bg-2">
                <div className="w-[70px] h-[70px] flex justify-center items-center">
                    <FaWifi className="text-[30px] text-white"/>
                </div>
            </div>
            <div className="">
                <h3 className="text-[18px] text-[#000000] mb-1">Tea Coffee</h3>
                <p>A small river named Duden flows by their place and supplies it with the necessary</p>
            </div>
        </div> 
    )
}
export default OfferList