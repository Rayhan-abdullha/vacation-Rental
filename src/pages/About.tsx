import SecondHeroSection from "../components/Share/HeroSection"
import Feedback from "../components/feedback/Feedback"
import Offer from "../components/offer/Offer"
import Services from "../components/services/Services"
import MainLayout from "../layout/HomeLayout"

const AboutPage = () => {

    return (
        <MainLayout>
            <SecondHeroSection />
            <Services payload={""}/>
            <Feedback />
            <Offer/>
        </MainLayout>
    )
}
export default AboutPage