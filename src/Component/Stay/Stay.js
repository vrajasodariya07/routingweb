import Footer from "../Home/Footer";
import Facilities from "./Facilities";
import Space from "./Space";
import SpaceImg from "./SpaceImg";
import StayBanner from "./StayBanner";
import Trip from "./Trip";

function Stay() {
    return(
        <>
            <StayBanner></StayBanner>
            <Space></Space>
            <SpaceImg></SpaceImg>
            <Facilities></Facilities>
            <Trip></Trip>
            <Footer></Footer>
        </>
    )
}

export default Stay;