import Apartment from '../components/apartment/Apartment'
import Feedback from '../components/feedback/Feedback'
import GetStarted from '../components/getStarted/GetStarted'
import BookAppertment from '../components/home/BookAppertment'
import Hero from '../components/home/Hero'
import News from '../components/news/News'
import Offer from '../components/offer/Offer'
import Services from '../components/services/Services'
import HomeLayout from '../layout/HomeLayout'
const Home = () => {
  return (
    <HomeLayout>
      <Hero />
      <section className='block lg:hidden'>
        <BookAppertment/>
      </section>
      <Services payload='home'/>
      <Apartment/>
      <Feedback />
      <Offer/>
      <GetStarted />
      <News />
    </HomeLayout>
  )
}

export default Home