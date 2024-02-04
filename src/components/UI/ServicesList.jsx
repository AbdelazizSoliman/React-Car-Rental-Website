import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';
import '../../styles/services-list.css';
import servicesData from '../../assets/data/serviceData';

const ServicesList = () => (
  <>
    {servicesData.map((item) => (
      <ServiceItem item={item} key={item.id} />
    ))}
  </>
);

const ServiceItem = ({ item }) => (
  <Col lg="4" md="4" sm="6" className="mb-3">
    <div className="service__item">
      <span className="mb-3 d-inline-block">
        <i className={item.icon} />
      </span>

      <h6>{item.title}</h6>
      <p className="section__description">{item.desc}</p>
    </div>
  </Col>
);

ServiceItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default ServicesList;
