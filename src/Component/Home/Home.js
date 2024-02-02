// component file
import Banner from './Banner.js';
import Luxury from './Luxury.js';
import Slider1 from './Slider1.js';
import Apline from './Alpine.js';
import Paid from './Paid.js';
import Essential from './Essential.js';
import Discover from './/Discover.js';
import Slider2 from './Slider2.js';
import Event from './Event.js';
import EventImg from './EventImg.js';
import Book from './Book.js';
import Footer from './Footer.js';

function Home() {
    return (
        <>
            <Banner></Banner>
            <Luxury></Luxury>
            <Slider1></Slider1>
            <Apline></Apline>
            <Paid></Paid>
            <Essential></Essential>
            <Discover></Discover>
            <Slider2></Slider2>
            <Event></Event>
            <EventImg></EventImg>
            <Book></Book>
            <Footer></Footer>
        </>
    )
}

export default Home;