import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../../styles/car-item.css';

const CarItem = ({ item }) => {
  const {
    imgUrl, model, carName, automatic, speed, price,
  } = item;

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__item">
        <div className="car__img">
          <img src={imgUrl} alt="" className="w-100" />
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{carName}</h4>
          <h6 className="rent__price text-center mt-">
            $
            {price}
            .00
            {' '}
            <span>/ Day</span>
          </h6>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-car-line" />
              {' '}
              {model}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-settings-2-line" />
              {' '}
              {automatic}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-timer-flash-line" />
              {' '}
              {speed}
            </span>
          </div>

          <button className="w-50 car__item-btn car__btn-rent" type="button">
            <Link to={`/cars/${carName}`}>Rent</Link>
          </button>

          <button className="w-50 car__item-btn car__btn-details" type="button">
            <Link to={`/cars/${carName}`}>Details</Link>
          </button>
        </div>
      </div>
    </Col>
  );
};

// Define prop types for CarItem component
CarItem.propTypes = {
  item: PropTypes.shape({
    imgUrl: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    carName: PropTypes.string.isRequired,
    automatic: PropTypes.string.isRequired,
    speed: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default CarItem;
