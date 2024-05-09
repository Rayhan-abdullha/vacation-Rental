import SecondHeroSection from "../components/Share/HeroSection"
import ApartmentList from "../components/apartment/ApartmentList"
import MainLayout from "../layout/HomeLayout"

const ApartmentPage = () => {

    return (
        <MainLayout>
            <SecondHeroSection />
            <ApartmentList/>
        </MainLayout>
    )
}
export default ApartmentPage