import { SlLocationPin } from "react-icons/sl"
import SecondHeroSection from "../components/Share/HeroSection"
import Services from "../components/services/Services"
import MainLayout from "../layout/HomeLayout"

const ServicesPage = () => {

    return (
        <MainLayout>
            <SecondHeroSection />
            <Services payload={""} />
            <section className='my-container' style={{paddingBottom: "50px", marginBottom: "60px"}}>
                <h2 className='font-family-secondary text-[54px] text-[#000000cc] text-center mb-5 pb-7'>Amenities</h2>
                <div className="contactInfo grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[25px]">
                {
                [1, 2, 3, 4, 5, 6, 7, 8].map((item:number) => (
                    <div key={item} className="flex gap-5 items-center">
                    <div className="border rounded-full p-6 bg-[#fd7792]">
                        <SlLocationPin className="text-white text-[22px]"/>
                    </div>
                    <div>
                        <h3 className='text-[17px] font-medium text-[#000000]'>Tea Coffee</h3>
                        <p className="">A small river named Duden flows by their place and supplies it with the necessary</p>
                    </div>
                    </div>
                ))
                }
                </div>
            </section>
        </MainLayout>
    )
}
export default ServicesPage