import SecondHeroSection from "../components/Share/HeroSection"
import ContactForm from "../components/contact/ContactForm"
import SocialContact from "../components/contact/SocialContact"
import MainLayout from "../layout/HomeLayout"

const ContactsPage = () => {

    return (
        <MainLayout>
            <SecondHeroSection />
            <div className="bg-light py-[90px] md:py-[110px]">
                <section className="my-container grid md:grid-cols-12 p-[48px]">
                    <div className="bg-gray-200 h-[400px] col-span-8"></div>
                    <div className="p-[48px] bg-white col-span-4">
                        <h2 className="font-bold font-family-secondary text-[30px] mb-[32px] text-black">Lets get started</h2>
                        <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        <p><a href="#" className="btn btn-primary">Book Apartment Now</a></p>
                    </div>
                </section>
                <section className="my-container grid md:grid-cols-12">
                    <ContactForm />
                    <SocialContact/>
                </section>
            </div>
        </MainLayout>
    )
}
export default ContactsPage