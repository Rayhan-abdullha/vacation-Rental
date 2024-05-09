import { BiSolidLeftArrow } from "react-icons/bi"
import { FaChevronRight } from "react-icons/fa"
import { MdOutlineStar } from "react-icons/md"
import { Link } from "react-router-dom"
import apartmentImg from '../../assets/room-1.jpg'
const ApartmentList = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2">
        {
            [1, 2, 3, 4].map((_item, index:number) => (
                <div key={index} className="flex flex-col md:flex-row">
                    <a href="#" className="md:basis-[50%] h-[400px] bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${apartmentImg})`}}></a>
                    <div className="relative md:basis-[50%] text-center bg-white flex justify-center items-center">
                        <div className="absolute top-50% left-[-25px]"><BiSolidLeftArrow className="text-[50px] text-white" /></div>
                        <div className='py-7'>
                            <p className="flex gap-1 justify-center">
                            <MdOutlineStar className="text-[#fd7792] text-[17px]"/>
                            <MdOutlineStar className="text-[#fd7792] text-[17px]"/>
                            <MdOutlineStar className="text-[#fd7792] text-[17px]"/>
                            <MdOutlineStar className="text-[#fd7792] text-[17px]"/>
                            <MdOutlineStar className="text-[#fd7792] text-[17px]"/>
                        </p>
                        {/* <p className="">
                            <span className="price mr-1">$120.00</span>
                            <span className="per">per night</span>
                        </p> */}
                        <h3 className="text-[30px]"><Link className='text-[#000000]' to="#">Suite Room</Link></h3>
                        <ul className="flex flex-col gap-1">
                            <li className='text-[14px]'><span className='text-[#000000]'>Size:</span> 45 m2</li>
                            <li className='text-[14px]'><span className='text-[#000000]'>Max:</span> 3 Persons</li>
                            <li className='text-[14px]'><span className='text-[#000000]'>View:</span> Sea View</li>
                            <li className='text-[14px]'><span className='text-[#000000]'>Bed:</span> 1</li>
                        </ul>
                        <p className="pt-1 flex justify-center mt-3">
                            <a href="#" className="text-[15px] flex items-center p-[10px] gap-3 text-[#000000] border border-[2px solid #0000001a] rounded-md">
                                View Room Details
                                <FaChevronRight className='text-[12px]'/>
                            </a>
                        </p>
                        </div>
                    </div>
                </div>
            ))}
    </div>
    )
}
export default ApartmentList