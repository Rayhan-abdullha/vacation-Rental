import { useEffect, useState } from "react"
import { IoMenu } from "react-icons/io5"
import { Link, useLocation } from "react-router-dom"
const navItems = [
    { id: 1, text: 'Home', href: '/' },
    { id: 2, text: 'About', href: '/about' },
    { id: 3, text: 'Services', href: '/services' },
    { id: 4, text: 'Apartment-Rooms', href: '/apartment-rooms' },
    { id: 5, text: 'Blog', href: '/blog' },
    { id: 6, text: 'Contact', href: '/contact' },
]
const Navbar = () => {
    const [innerWidth, setinnerWidth] = useState<number>(window.innerWidth)
    const [showNav, setShowNav] = useState<boolean>(false)
    const path = useLocation()

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
                    <button onClick={handleNav} className="blcok lg:hidden flex items-center gap-1">
                        <IoMenu className="text-[22px] font-bold mt-[-2px]" />
                        <span className="text-[16px]" style={{letterSpacing: "2px"}}>MENU</span>
                    </button>
                </div>
                <div className={`${(showNav && (innerWidth < 1024)) || (!showNav && innerWidth > 1024 || innerWidth === 0) ? 'block':'hidden'} mt-5 lg:mt-0`}>
                    <ul className={`flex flex-col lg:flex-row gap-5 lg:gap-10`}>
                        {
                            navItems.map(item => (
                                
                                <li className="" key={item.id}>
                                    <Link to={`${item.href}`} className={`navItem nav-item ${path.pathname === '/' && item.id === 1 && 'active'} ${path.pathname.toString() === `/${item.text.toLocaleLowerCase() }`? 'active' : ''} lg:py-[32px] text-[15px] block text-[#4d4d4d] hover:text-[#fd7792] relative transition-all duration-500`}>{item.text}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Navbar