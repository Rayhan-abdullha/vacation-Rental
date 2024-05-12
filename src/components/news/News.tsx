import { FaClover } from 'react-icons/fa6'
import service_img from '../../assets/services-3.jpg'
import { Link } from 'react-router-dom'

const News = () => {
  return (
      <div className="bg-light py-[110px]">
        <section className="my-container">
          <div className="text-center pb-[50px]" data-aos="fade-down">
              <h2 className='text-[28px] md:text-[54px] text-[#000000]' style={{fontFamily: "Playfair Display, serif"}}>Latest news from our blog</h2>
              <span className="text-[12px] block font-semibold uppercase color-2 tracking-[2px]">News &amp; Blog</span>
          </div>
          <div className='grid gap-7 grid-cols-1 md:grid-cols-3' data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
              {
                [1, 2, 3].map((item) => (
                  <div style={{boxShadow: 'rgba(0, 0, 0, 0.11) 0px 10px 27px -9px;'}} key={item}>
                    <div className="h-[300px] cursor-pointer rounded-md" style={{backgroundImage: `url(${service_img})`, backgroundPosition: 'center'}}></div>
                    <div className="bg-white text-center rounded-md">
                      <div className='py-10 px-5'>
                        <h3 className="mb-3 text-[#000000] text-[24px] font-normal hover:text-[#fd7792] cursor-pointer transition-all duration-300" style={{fontFamily: "Playfair Display, serif"}}>Work Hard, Party Hard in a Luxury Chalet in the Alps</h3>
                        <div className="mb-2 flex color-2 justify-center">
                          <span>January 30, 2020</span>
                          <span className='mx-2'><Link to="#">Admin</Link></span>
                          <span><Link to="#" className="flex items-center"><FaClover/> 3</Link></span>
                        </div>
                        <p className='mb-5'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                      </div>
                    </div>
                  </div> 
                ))
              }     
            </div>
        </section>
      </div>
    )
}
export default News