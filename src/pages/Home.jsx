import AboutUs from "../components/AboutUs/AboutUs";
import FollowUs from "../components/FollowUs/FollowUs";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import Projects from "../components/Projects/Projects";
import Team from "../components/Team/Team";

export default function HomePage() {
    return (
        <>
            <Header />
            <Home />
            <Projects />
            <Team />
            <AboutUs />
            <FollowUs />
            <Footer />
        </>
    )
}