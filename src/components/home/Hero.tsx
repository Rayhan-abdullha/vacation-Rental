import { Link } from 'react-router-dom'
import bgImg from '../../assets/bg_1.jpg'
import BookAppertment from './BookAppertment'
const Hero = () => {
    return (
        <section className='hero-wrap relative flex items-center lg:bg-fixed h-[992px]' style={{backgroundImage: `url(${bgImg})`, backgroundPosition: "50% 50%"}}>
            <div className="overlay opacity-[.1] bg-[#000000]"></div>
                <div className="lg:max-w-[1280px] lg:mx-auto lg:flex lg:gap-5 lg:justify-between z-[9] px-[15px]">
                    <section className="lg:basis-[60%] ">
                        <div data-aos="fade-up">
                            <h2 className="slider-text-subheading z-[999999]">Welcome to Vacation Rental</h2>
                            <h1 className="slider-text-heading sm:w-[80%] lg:w-auto text-[40px] lg:text-[80px] mb-4 z-[999999]">Rent an appartment for your vacation</h1>
                        </div>
                        <p className='flex gap-2'>
                            <Link className='btn btn-primary' to="#">Learn more</Link>
                            <Link className='btn btn-white' to="#">Contact us</Link>
                        </p>
                    </section>
                    <section className='hidden lg:block lg:basis-[32%] bg-white z-[99999] rounded-md'>
                        <BookAppertment/>
                    </section>
                </div>
        </section>
    )
}
export default Hero