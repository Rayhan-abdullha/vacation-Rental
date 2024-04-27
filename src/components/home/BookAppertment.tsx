import { FaChevronDown } from 'react-icons/fa'

function BookAppertment() {
  return (
    <form className='flex flex-col gap-5 p-[35px] mb-2 lg:mb-0' style={{boxShadow: "0px 15px 34px -29px rgba(0, 0, 0, 0.54)"}}>
        <h3 className='text-[28px] font-family-secondary' style={{color: 'rgba(0, 0, 0, 0.8)'}}>Book your apartment</h3>
            <div className="">
                <input className="form-control" type="text" placeholder="Full Name"/>
            </div>   
            <div className="grid md:grid-cols-2 gap-5">
                <div className="">
                    <input className="form-control" type="text" placeholder="Check-In"/>
                </div>
                <div className="">
                    <input className="form-control" type="text" placeholder="Check-Out"/>
                </div>
                <div className="relative">
                <select className="form-control appearance-none cursor-pointer">
                    <option value="">Adults</option>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5</option>
                </select>
                <div className="icon absolute top-[20px] right-[20px]">
                    <FaChevronDown className='text-[13px] font-bold cursor-pointer' />
                </div>
                </div>
                <div className="relative" >
                    <select className="form-control appearance-none">
                        <option value="">Children</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                    </select>
                <div className="icon absolute top-[20px] right-[20px]">
                    <FaChevronDown className='text-[13px] font-bold cursor-pointer' />
                </div>
            </div>
            <div>
                <input className="form-control" type="text" placeholder="Phone number"/>
            </div>
            <div>
                <input className="form-control" type="text" placeholder="Time"/>
            </div>
        </div>
            <input className='btn btn-primary font-medium text-center' type="submit" value="Book Appartment Now"/>
    </form>
  )
}

export default BookAppertment