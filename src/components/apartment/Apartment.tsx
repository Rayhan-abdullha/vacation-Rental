import ApartmentList from "./ApartmentList"

const Apartment = () => {
return (
<section className='py-[90px] bg-light px-[15px] md:px-0'>
    <div className="text-center pb-[48px] mb-4">
        <h2 className='text-[28px] lg:text-[54px] font-family-secondary text-[#000000]'>Apartment Room</h2>
    </div>
    <ApartmentList/>
</section>
)}

export default Apartment