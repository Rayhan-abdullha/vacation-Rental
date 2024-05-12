import bg from '../../assets/bg_1.jpg'
import OfferList from './OffertList'
const Offer = () => {
    return (
        <section className="bg-light py-[100px]">
            <div className="my-container flex flex-col md:flex-row gap-10">
                <section className='md:basis-[50%]'>
                    <div className="w-full">
                        <div className="w-full h-[600px] bg-center bg-cover" style={{ backgroundImage: `url(${bg})` }}></div>
                        <div className='mt-5'>
                            <h2 className='text-[32px] font-family-secondary text-[#000000] mb-2'>The most recommended vacation rental</h2>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                        </div>
                    </div>
                </section>
                <section className='md:basis-[50%]' data-aos="fade-up">
                    <div className="mb-3">
                        <h2 className="mb-3 text-[28px] md:text-[54px] font-family-secondary text-[#000000]">What we offer</h2>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                        {
                            new Array(8).fill(1).map((_item,index:number) => (
                                <OfferList key={index}/>
                            ))
                        }
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Offer