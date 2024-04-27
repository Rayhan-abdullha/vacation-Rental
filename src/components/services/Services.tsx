import service_img from '../../assets/services-1.jpg'
const Services = () => {
    return (
      <div className="lg:bg-white py-[90px] lg:pb-[330px]">
         <section className="lg:absolute lg:bottom-[-450px] lg:left-0 lg:right-0 my-container grid gap-12 grid-cols-1 md:grid-cols-3">
          {
            [1, 2, 3].map(() => (
              <div className="text-center p-5 bg-white rounded-[5px]" style={{boxShadow: '0px 10px 27px -9px rgba(0, 0, 0, 0.11)'}}>
                <div className="h-[200px]" style={{backgroundImage: `url(${service_img})`}}></div>
                <div className="p-5">
                  <h3 className="mb-2 text-[#000000] text-[26px] font-normal" style={{fontFamily: "Playfair Display, serif"}}>Map Direction</h3>
                  <p className='mb-5'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                  <p><a href="#" className="btn btn-primary">Read more</a></p>
                </div>
              </div> 
            ))
          }     
        </section>
       </div>
    )
}
export default Services