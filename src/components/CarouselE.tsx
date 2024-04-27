import personImg from '../assets/person-1.jpg'

import { BiSolidQuoteLeft } from 'react-icons/bi'; // Assuming you're using react-icons for the quote icon

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const TestimonialCarousel = () => {
    return (
        <div className="relative">
            <Carousel
                showArrows={false}
                showStatus={false}
                showIndicators={true}
                showThumbs={false}
                infiniteLoop
                centerMode
                centerSlidePercentage={50}
            >
                {
                    new Array(10).fill(1).map((_item, index: number) => (
                        <div key={index} className="item bg-white p-4">
                            <div className="px-5 py-[30px] flex">
                                <div className="">
                                    <div className="h-[80px] w-[80px] rounded-full bg-cover bg-center" style={{backgroundImage: `url(${personImg})`}}></div>
                                </div>
                                <div className="pl-5 relative">
                                    <span className="absolute top-[-45px] left-[25px] opacity-[1] flex items-center justify-center">
                                        <BiSolidQuoteLeft className="color-2 text-[30px]"/>
                                    </span>
                                    <p className="mb-5">{ index} Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                    <p className="font-[400] text-[16px] text-[#000000]">Racky Henderson</p>
                                    <span className="position">Father</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Carousel>
        </div>
    );
};

export default TestimonialCarousel;
