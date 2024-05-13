import { useEffect, useState } from 'react';
import personImg from '../../assets/person-1.jpg'
import { BiSolidQuoteLeft } from 'react-icons/bi'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Feedback = () => {
    const [innderWidth, setInnerWidth] = useState<number>(window.innerWidth)
    const [centerSlidePercentage, setCenterSlidePercentage] = useState<number>(100)
    useEffect(() => {
        if (innerWidth < 768) {
            setCenterSlidePercentage(100)
        } else if (innerWidth < 1024) {
            setCenterSlidePercentage(50)
        } else {
            setCenterSlidePercentage(33.33)
        }
        function handleResize() {
            setInnerWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [innderWidth])
    return (
        <section className="bg-light py-[50px] md:py-[110px]">
            <div className="my-container">
                <div className="text-center pb-[50px]">
                    <h2 data-aos="fade-up" className='text-[28px] md:text-[54px] text-[#000000]' style={{fontFamily: "Playfair Display, serif"}}>Happy Clients &amp; Feedbacks</h2>
                </div>
                
                <div className="relative" data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="400">
                    <Carousel
                        showArrows={false}
                        showStatus={false}
                        showIndicators={true}
                        showThumbs={false}
                        infiniteLoop
                        centerMode
                        centerSlidePercentage={centerSlidePercentage}
                        renderIndicator={(onClickHandler, isSelected, index, label) => {
                            const indicatorClasses = isSelected ? 'indicator selected' : 'indicator';
                            return (
                                <li
                                    className={indicatorClasses}
                                    aria-label={`Slide ${index}`}
                                    title={`${label} ${index}`}
                                    onClick={onClickHandler}
                                    key={index}
                                />
                            );
                        }}
                    >
                        {Array.from({ length: 5 }, (_, index) => (
                            <div key={index} className="bg-white m-4">
                                <div className="px-5 py-[30px] flex gap-3">
                                    <div className="w-[25%]">
                                        <div className="h-[80px] w-[80px] rounded-full bg-center bg-cover object-center" style={{ backgroundImage: `url(${personImg})`}} />
                                    </div>
                                    <div className="relative text-start basis-[75%]">
                                        <span className="absolute top-[-45px] left-[25px] opacity-[1] flex items-center justify-center">
                                            <BiSolidQuoteLeft className="color-2 text-[30px]"/>
                                        </span>
                                        <p className="mb-5 text-[13px]">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
                                        <p className="font-[400] text-[16px] text-[#000000]">Racky Henderson</p>
                                        <span className='text-[13px]'>Father</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>  
            </div>
        </section>
    )
}

export default Feedback;
