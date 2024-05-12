import { Link, useLocation } from 'react-router-dom'
import bg2 from '../../assets/bg_2.jpg'
import { FaChevronRight } from 'react-icons/fa'
const SecondHeroSection = () => {
    const location = useLocation()
    const pathName = location.pathname.slice(1, location.pathname.length)
    return (
        <div className='hero-secondary bg-cover bg-no-repeat h-[400px] lg:bg-fixed relative b' style={{ backgroundImage: `url(${bg2})`}}>
            <div className='overlay opacity-[.2] bg-[#000000]'></div>
            <div className='flex justify-center items-center h-[400px]'>
                <div className='hero-text z-[9]' data-aos="fade-up">
                    <ul className='flex gap-3 justify-center'>
                        <li className='hover:text-[#fd7792] flex items-center'>
                            <Link className='text-[16px] capitalize font-semibold hover:text-[#fd7792]' style={{ color: 'rgba(255, 255, 255, 0.7)' }} to="/">Home</Link>
                            <FaChevronRight style={{ color: 'rgba(255, 255, 255, 0.7)', marginTop: '-1px' }}/>
                        </li>
                        <li style={{color: 'rgba(255, 255, 255, 0.5)'}} className='text-[16px] capitalize font-semibold'>
                            {pathName}
                        </li>
                    </ul>
                    <h1 className='text-white text-[60px] slider-text-heading capitalize'>{pathName}</h1> 
                </div>
            </div>
        </div>
    )
}
export default SecondHeroSection