import { useEffect, useState } from "react"
import { FaBoxOpen } from "react-icons/fa"
import { Link } from "react-router-dom"
const Navbar = () => {
    const [innerWidth, setinnerWidth] = useState<number>(0)
    const [showNav, setShowNav] = useState<boolean>(false)

    function handleNav() {
        setShowNav(prev => !prev)
    }
    
    useEffect(() => {
        if (innerWidth > 1024) {
            setShowNav(false)
        }
        function handleResize() {
            setinnerWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [innerWidth]);
    return (
        <div className="bg-white py-[10px] lg:py-0">
            <nav className="my-container lg:flex lg:justify-between items-center gap-5 relative">
                <div className="flex justify-between">
                    <Link className="text-[24px] font-bold text-[#000000] leading-[1]" to="/">Vacation<span className="text-2 color-2">Rental</span></Link>
                    <button onClick={handleNav} className="blcok lg:hidden flex items-center gap-2">
                        <FaBoxOpen className="text-[20px]" />
                        <span className="text-[16px]">MENU</span>
                </button>
                </div>
                <div className={`${(showNav && (innerWidth < 1024)) || (!showNav && innerWidth > 1024 || innerWidth === 0) ? 'block':'hidden'} mt-5 lg:mt-0`}>
                    <ul className={`flex flex-col lg:flex-row gap-5 lg:gap-10`}>
                        <li className=""><Link to="/" className="nav-item active lg:py-[32px] text-[15px] block text-[#4d4d4d]">Home</Link></li>
                        <li className=""><Link to="/about" className="nav-item lg:py-[32px] text-[15px] block text-[#4d4d4d]">About</Link></li>
                        <li className=""><Link to="/services" className="nav-item lg:py-[32px] text-[15px] block text-[#4d4d4d]">Services</Link></li>
                        <li className=""><Link to="/apartment-room" className="nav-item lg:py-[32px] text-[15px] block text-[#4d4d4d]">Apartment Room</Link></li>
                        <li className=""><Link to="/blog" className="nav-item lg:py-[32px] text-[15px] block text-[#4d4d4d]">Blog</Link></li>
                        <li className=""><Link to="/contact" className="nav-item lg:py-[32px] text-[15px] block text-[#4d4d4d]">Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Navbar