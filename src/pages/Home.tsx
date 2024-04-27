import Apartment from '../components/apartment/Apartment'
import Feedback from '../components/feedback/Feedback'
import Footer from '../components/footer/Footer'
import GetStarted from '../components/getStarted/GetStarted'
import Header from '../components/header/Header'
import BookAppertment from '../components/home/BookAppertment'
import Hero from '../components/home/Hero'
import News from '../components/news/News'
import Offer from '../components/offer/Offer'
import Services from '../components/services/Services'
const Home = () => {
  return (
    <div className="home">
      <Header />
      <Hero />
      <section className='block lg:hidden'>
        <BookAppertment/>
      </section>
      <Services />
      <Apartment/>
      <Feedback />
      <Offer/>
      <GetStarted />
      <News />
      <Footer />
    </div>
  )
}

export default Home