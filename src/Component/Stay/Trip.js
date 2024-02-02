import '../../App.css';
import { FaHandshake } from "react-icons/fa";
import { MdOutlineStar } from "react-icons/md";

function Trip() {
    return(
    <>
        <section className="trip">
            <div>
                <img src={require(`../../image/asset 43.jpg`)} alt="" srcset="" />
                <div className="trip-cont text-center d-flex flex-column justify-content-center">
                    <div className='t-icon i'><FaHandshake /></div>
                    <h5 className='mb-4'>“Everything here was great: the staff, the room layout, the property amenities with indoor pool, and the quality of the food. But the high point is the view from the mountains.”</h5>
                    <p>Anna Williams – TripAdvisor</p>
                    <div className='t-icon'><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /></div>
                </div>
            </div>
        </section>
    </>
    )
}

export default Trip