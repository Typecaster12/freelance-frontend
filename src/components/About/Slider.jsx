import { useState } from 'react';
import Data from './Data.json';
import './Slider.css';

const Slider = () => {

    //State for slider;
    const [slide, setSlide] = useState(0);

    //function to handle next slide;
    const nextSlide = () => {
        setSlide(slide === Data.length - 1 ? 0 : slide + 1);
    }

    //function to handle previous slide;
    const previousSlide = () => {
        setSlide(slide === 0 ? Data.length - 1 : slide - 1);
    }


    return (
        <>
            <div className="carousel">
                {
                    Data.map((item, index) => (
                        <div key={index} className={slide === index ? 'slider' : 'slider slider-hidden'}>
                            <div
                                className="icon"
                                id='icn'
                                dangerouslySetInnerHTML={{ __html: item.icon }}
                            />
                            <h3 className='title'>{item.title}</h3>
                            <p className='para'>{item.para}</p>
                        </div>
                    ))
                }
            </div>

            <div className="buttons">
                {
                    Data.map((_, index) => (
                        <button className={slide === index ? 'indicator' : 'indicator indicator-inactive'} key={index}></button>
                    ))
                }
            </div>

            <div className="arrows">
                <div className="left" onClick={previousSlide}>
                    <i className='bx bx-chevrons-left' ></i>
                </div>

                <div className='right' onClick={nextSlide}>
                    <i className='bx bx-chevrons-right'></i>
                </div>
            </div>
        </>
    )
}

export default Slider;
