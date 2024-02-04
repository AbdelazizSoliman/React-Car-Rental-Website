import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container, Row, Col, Form, FormGroup, Input,
} from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';

import '../styles/contact.css';

const socialLinks = [
  {
    id: 'facebook',
    url: '#',
    icon: 'ri-facebook-line',
  },
  {
    id: 'instagram',
    url: '#',
    icon: 'ri-instagram-line',
  },
  {
    id: 'linkedin',
    url: '#',
    icon: 'ri-linkedin-line',
  },
  {
    id: 'twitter',
    url: '#',
    icon: 'ri-twitter-line',
  },
];

const Contact = () => (
  <Helmet title="Contact">
    <CommonSection title="Contact" />
    <section>
      <Container>
        <Row>
          <Col lg="7" md="7">
            <h6 className="fw-bold mb-4">Get In Touch</h6>

            <Form>
              <FormGroup className="contact__form">
                <Input placeholder="Your Name" type="text" />
              </FormGroup>
              <FormGroup className="contact__form">
                <Input placeholder="Email" type="email" />
              </FormGroup>
              <FormGroup className="contact__form">
                <textarea
                  rows="5"
                  placeholder="Message"
                  className="textarea"
                />
              </FormGroup>

              <button className=" contact__btn" type="submit">
                Send Message
              </button>
            </Form>
          </Col>

          <Col lg="5" md="5">
            <div className="contact__info">
              <h6 className="fw-bold">Contact Information</h6>
              <p className="section__description mb-0">
                123 Yosry Ragheb, Assuit, Egypt
              </p>
              <div className=" d-flex align-items-center gap-2">
                <h6 className="fs-6 mb-0">Phone:</h6>
                <p className="section__description mb-0">+201020635513</p>
              </div>

              <div className=" d-flex align-items-center gap-2">
                <h6 className="mb-0 fs-6">Email:</h6>
                <p className="section__description mb-0">example@gmail.com</p>
              </div>

              <h6 className="fw-bold mt-4">Follow Us</h6>

              <div className=" d-flex align-items-center gap-4 mt-3">
                {socialLinks.map((item) => (
                  <Link
                    to={item.url}
                    key={item.id} // Using unique ID as key
                    className="social__link-icon"
                  >
                    <i className={item.icon} />
                  </Link>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
);

export default Contact;
