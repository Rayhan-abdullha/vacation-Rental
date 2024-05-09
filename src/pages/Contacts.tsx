import SecondHeroSection from "../components/Share/HeroSection"
import Services from "../components/services/Services"
import MainLayout from "../layout/HomeLayout"

const ContactsPage = () => {

    return (
        <MainLayout>
            <SecondHeroSection />
            <Services payload={""} />
            
        </MainLayout>
    )
}
export default ContactsPage