import Footer from "../Home/Footer";
import Energy from "./Energy";
import Move from "./Move";
import RelaxBanner from "./RelaxBanner";
import Video from "./Video";
import Wellness from "./Wellness";

function Relax() {
    return(
    <>

        <RelaxBanner></RelaxBanner>
        <Wellness></Wellness>
        <Energy></Energy>
        <Move></Move>
        <Video></Video>
        <Footer></Footer>

    </>
    )
}

export default Relax;