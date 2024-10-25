import './About.css';
import Slider from './Slider';

const About = () => {
    return (
        <section className='about'>
            <div className="about-heading">
                <h1>About Us!</h1>
                <p>All About Us.</p>
            </div>

            <div className="slider-container">
                <Slider />
            </div>
        </section>
    )
}

export default About;
