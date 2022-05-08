import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item id="carousel-item-1">

                    <Carousel.Caption data-aos="fade-up" className='top-50 position-absolute'>
                        <h1 className='display-2'>Fruity</h1>
                        <p>An apple stay away doctor </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item id="carousel-item-2">

                    <Carousel.Caption data-aos="fade-up" className='top-50 position-absolute'>
                        <h1 className='display-2'>Fruity</h1>
                        <p>Fresh an testy fruits in town.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item id='carousel-item-3'>


                    <Carousel.Caption data-aos="fade-up" className='top-50 position-absolute'>
                        <h1 className='display-2'>Fruity</h1>
                        <p>Keep yor body healthy with our organic fruits</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item id='carousel-item-4'>


                    <Carousel.Caption data-aos="fade-up" className='top-50 position-absolute'>
                        <h1 className='display-2'>Fruity</h1>
                        <p>Keep your breakfast colorful with us</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Banner;