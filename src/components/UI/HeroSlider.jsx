import React from 'react';

import Slider from 'react-slick';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';

import '../../styles/hero-slider.css';

const HeroSlider = () => {
  const sliderSettings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <Slider
      fade={sliderSettings.fade}
      speed={sliderSettings.speed}
      autoplaySpeed={sliderSettings.autoplaySpeed}
      infinite={sliderSettings.infinite}
      autoplay={sliderSettings.autoplay}
      slidesToShow={sliderSettings.slidesToShow}
      slidesToScroll={sliderSettings.slidesToScroll}
      pauseOnHover={sliderSettings.pauseOnHover}
      className="hero__slider"
    >
      <div className="slider__item slider__item-01 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">For Rent $70 Per Day</h4>
            <h1 className="text-light mb-4">Reserve Now and Get 50% Off</h1>

            <button className="btn reserve__btn mt-4" type="button">
              <Link to="/cars">Reserve Now</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-02 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">For Rent $70 Per Day</h4>
            <h1 className="text-light mb-4">Reserve Now and Get 50% Off</h1>

            <button className="btn reserve__btn mt-4" type="button">
              <Link to="/cars">Reserve Now</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-03 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">For Rent $70 Per Day</h4>
            <h1 className="text-light mb-4">Reserve Now and Get 50% Off</h1>

            <button className="btn reserve__btn mt-4" type="button">
              <Link to="/cars">Reserve Now</Link>
            </button>
          </div>
        </Container>
      </div>
    </Slider>
  );
};

export default HeroSlider;
