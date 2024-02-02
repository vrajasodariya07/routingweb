import '../../App.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Slider1() {

  const slid = {
    items: 1,
    autoWidth: true,
  }

    return (
        <>
            <section className='slider1'>
                <OwlCarousel className='owl-theme' loop margin={0} {...slid} center={true} nav>
                    <div class='item'>
                        <img src={require(`../../image/asset 19.jpeg`)} alt="" className='img-contex' width={'100%'}></img>
                    </div>
                    <div class='item'>
                        <img src={require(`../../image/asset 20.jpeg`)} alt="" className='img-contex' width={'100%'}></img>
                    </div>
                    <div class='item'>
                        <img src={require(`../../image/asset 15.jpeg`)} alt="" className='img-contex' width={'100%'}></img>
                    </div>
                    <div class='item'>
                        <img src={require(`../../image/asset 16.jpeg`)} alt="" className='img-contex' width={'100%'}></img>
                    </div>
                    <div class='item'>
                        <img src={require(`../../image/asset 17.jpeg`)} alt="" className='img-contex' width={'100%'}></img>
                    </div>
                    <div class='item'>
                        <img src={require(`../../image/asset 18.jpeg`)} alt="" className='img-contex' width={'100%'}></img>
                    </div>
                </OwlCarousel>
            </section>
        </>
    )
}

export default Slider1