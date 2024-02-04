import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import '../../styles/common-section.css';

const CommonSection = ({ title }) => (
  <section className="common__section mb-5">
    <Container className="text-center">
      <h1 className="text-light">{title}</h1>
    </Container>
  </section>
);

CommonSection.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CommonSection;
