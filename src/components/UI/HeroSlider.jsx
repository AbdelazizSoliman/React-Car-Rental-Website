import React from 'react';
import Slider from 'react-slick';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../styles/hero-slider.css';

const HeroSlider = () => {
  const settings = {
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
    <Slider settings={settings} className="hero__slider">
      <SliderItem
        imageClass="slider__item-01"
        title="For Rent $70 Per Day"
        subTitle="Reserve Now and Get 50% Off"
      />
      <SliderItem
        imageClass="slider__item-02"
        title="For Rent $70 Per Day"
        subTitle="Reserve Now and Get 50% Off"
      />
      <SliderItem
        imageClass="slider__item-03"
        title="For Rent $70 Per Day"
        subTitle="Reserve Now and Get 50% Off"
      />
    </Slider>
  );
};

const SliderItem = ({ imageClass, title, subTitle }) => (
  <div className={`slider__item ${imageClass} mt0`}>
    <Container>
      <div className="slider__content">
        <h4 className="text-light mb-3">{title}</h4>
        <h1 className="text-light mb-4">{subTitle}</h1>
        <button className="btn reserve__btn mt-4" type="button">
          <Link to="/cars">Reserve Now</Link>
        </button>
      </div>
    </Container>
  </div>
);

SliderItem.propTypes = {
  imageClass: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

export default HeroSlider;
