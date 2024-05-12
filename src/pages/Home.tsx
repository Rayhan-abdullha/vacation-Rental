import { useEffect } from 'react'
import Apartment from '../components/apartment/Apartment'
import Feedback from '../components/feedback/Feedback'
import GetStarted from '../components/getStarted/GetStarted'
import BookAppertment from '../components/home/BookAppertment'
import Hero from '../components/home/Hero'
import News from '../components/news/News'
import Offer from '../components/offer/Offer'
import Services from '../components/services/Services'
import HomeLayout from '../layout/HomeLayout'
import AOS from 'aos'

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
    }, [])
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