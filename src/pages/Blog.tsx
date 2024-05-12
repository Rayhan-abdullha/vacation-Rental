import { Link } from "react-router-dom"
import SecondHeroSection from "../components/Share/HeroSection"
import MainLayout from "../layout/HomeLayout"
import { FaClover } from "react-icons/fa6"
import service_img from '../assets/services-2.jpg'
import Pagination from "../components/Pagination"

const BlogPage = () => {

    return (
        <MainLayout>
            <SecondHeroSection />
            <div className="bg-light py-[90px]">
                <div className='my-container grid gap-7 grid-cols-1 md:grid-cols-3'>
                {
                    [1, 2, 3, 5, 6, 7, 8, 9].map((item) => (
                        <div data-aos="fade-up" key={item} style={{boxShadow: 'rgba(0, 0, 0, 0.11) 0px 10px 27px -9px'}}>
                        <div className="h-[300px] cursor-pointer rounded-md" style={{backgroundImage: `url(${service_img})`, backgroundPosition: 'center'}}></div>
                        <div className="bg-white text-center rounded-md">
                        <div className='py-10 px-5'>
                            <h3 className="mb-3 text-[#000000] text-[24px] font-normal hover:text-[#fd7792] cursor-pointer transition-all duration-300" style={{fontFamily: "Playfair Display, serif"}}>Work Hard, Party Hard in a Luxury Chalet in the Alps</h3>
                            <div className="mb-2 flex color-2 justify-center">
                            <span>January 30, 2020</span>
                            <span className='mx-2'><Link to="#">Admin</Link></span>
                            <span><Link to="#" className="flex items-center"><FaClover/> 3</Link></span>
                            </div>
                            <p className='mb-5'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                        </div>
                        </div>
                    </div> 
                    ))
                }     
                </div>
                <Pagination/>
            </div>
        </MainLayout>
    )
}
export default BlogPage