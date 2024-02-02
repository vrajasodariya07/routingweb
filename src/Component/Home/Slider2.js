import '../../App.css';
import OwlCarousel from 'react-owl-carousel';
import { TbRulerMeasure } from "react-icons/tb";
import { GoPeople } from "react-icons/go";
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";

function Slider2() {

  const slid2 = {
    items: 1,
    stagePadding: 100,
    // margin: 50,
    responsive: {
      0: {
        margin: 0,
      },
      768:
      {
        margin: 50,
      }
    }
  }

    return (
        <>
            <section className='slider2'>
                <OwlCarousel className='owl-theme' loop margin={0} nav {...slid2}>
                    <div class='item'>
                        <div className='item-img text-center'>
                            <img src={require(`../../image/asset 27.jpeg`)} alt="" className='img-contex1' width={'100%'} />
                        </div>
                        <div className='slid2-cont d-flex flex-column justify-content-center text-center'>
                            <div>
                                <a href="">Deluxe Room</a>
                            </div>
                            <div>
                                <ul className='d-flex flex-column flex-md-row justify-content-center'>
                                    <li><TbRulerMeasure /><span>35 m</span></li>
                                    <li><GoPeople /><span>2 Guests</span></li>
                                    <li><FaBed /><span>1 Bed</span></li>
                                    <li><FaBath /><span>1 Bathroom</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className='price'>
                            <a href="">FROM $399</a>
                        </div>
                    </div>
                    <div class='item'>
                        <div className='item-img text-center'>
                            <img src={require(`../../image/asset 28.jpeg`)} alt="" className='img-contex1' width={'100%'} />
                        </div>
                        <div className='slid2-cont d-flex flex-column justify-content-center text-center'>
                            <div>
                                <a href="">Deluxe Room</a>
                            </div>
                            <div>
                                <ul className='d-flex justify-content-center'>
                                    <li><TbRulerMeasure /><span>35 m</span></li>
                                    <li><GoPeople /><span>2 Guests</span></li>
                                    <li><FaBed /><span>1 Bed</span></li>
                                    <li><FaBath /><span>1 Bathroom</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className='price'>
                            <a href="">$219 / NIGHT</a>
                        </div>
                    </div>
                    <div class='item'>
                        <div className='item-img text-center'>
                            <img src={require(`../../image/asset 29.jpeg`)} alt="" className='img-contex1' width={'100%'} />
                        </div>
                        <div className='slid2-cont d-flex flex-column justify-content-center text-center'>
                            <div>
                                <a href="">DSignature Suite</a>
                            </div>
                            <div>
                                <ul className='d-flex justify-content-center'>
                                    <li><TbRulerMeasure /><span>35 m</span></li>
                                    <li><GoPeople /><span>2 Guests</span></li>
                                    <li><FaBed /><span>1 Bed</span></li>
                                    <li><FaBath /><span>1 Bathroom</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className='price'>
                            <a href="">FROM $399</a>
                        </div>
                    </div>
                </OwlCarousel>
            </section>
        </>
    )
}

export default Slider2;