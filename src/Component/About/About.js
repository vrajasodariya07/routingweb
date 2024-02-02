import Service from "./Service";
import Footer from "./../Home/Footer";
import AboutBanner from "./AboutBanner";
import Meet from "./Meet";
import Seek from "./Seek";
import Explore from "./Explore";

function About() {
    return(
    <>
    
        <AboutBanner></AboutBanner>
        <Meet></Meet>
        <Seek></Seek>
        <Service></Service>
        <Explore></Explore>
        <Footer></Footer>
    
    </>
    )
}

export default About;