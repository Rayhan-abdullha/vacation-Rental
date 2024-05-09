import SecondHeroSection from "../components/Share/HeroSection"
import News from "../components/news/News"
import Services from "../components/services/Services"
import MainLayout from "../layout/HomeLayout"

const BlogPage = () => {

    return (
        <MainLayout>
            <SecondHeroSection />
            <Services payload={""} />
            <News/>
        </MainLayout>
    )
}
export default BlogPage