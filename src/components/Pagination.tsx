import { Link } from "react-router-dom"

const Pagination = () => {

    return (
        <div className="flex justify-center mt-12 pt-12">
            <ul className="flex gap-1">
                <li className="border border-[#e6e6e6]  text-[#808080] w-[40px] h-[40px] rounded-full flex items-center justify-center">
                    <Link className="p" to="/">{'<'}</Link>
                </li>
                <li className="border border-[#e6e6e6] leading-[40px] text-[#808080] w-[40px] h-[40px] rounded-full flex items-center justify-center">
                    <Link className="p" to="/">1</Link>
                </li>
                <li className="border pg-active border-[#e6e6e6] leading-[40px] text-[#808080] w-[40px] h-[40px] rounded-full flex items-center justify-center">
                    <Link className="p" to="/">2</Link>
                </li>
                <li className="border border-[#e6e6e6] leading-[40px] text-[#808080] w-[40px] h-[40px] rounded-full flex items-center justify-center">
                    <Link className="p" to="/">3</Link>
                </li>
                <li className="border border-[#e6e6e6] leading-[40px] text-[#808080] w-[40px] h-[40px] rounded-full flex items-center justify-center">
                    <Link className="p" to="/">4</Link>
                </li>
                <li className="border border-[#e6e6e6] leading-[40px] text-[#808080] w-[40px] h-[40px] rounded-full flex items-center justify-center">
                    <Link className="p" to="/">5</Link>
                </li>
                <li className="border border-[#e6e6e6] leading-[40px] text-[#808080] w-[40px] h-[40px] rounded-full flex items-center justify-center">
                    <Link className="p" to="/">{'>'}</Link>
                </li>
            </ul>
        </div>
    )
}
export default Pagination