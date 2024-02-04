import React, { useRef } from 'react';

import { Container, Row, Col } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';
import '../../styles/header.css';

const navLinks = [
  {
    path: '/home',
    display: 'Home',
  },
  {
    path: '/about',
    display: 'About',
  },
  {
    path: '/cars',
    display: 'Cars',
  },

  {
    path: '/blogs',
    display: 'Blog',
  },
  {
    path: '/contact',
    display: 'Contact',
  },
];

const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle('menu__active');

  return (
    <header className="header">
      {/* ============ header top ============ */}
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span>Need Help?</span>
                <span className="header__top__help">
                  <i className="ri-phone-fill" />
                  {' '}
                  +20-102-063-5513
                </span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                <Link to="/home" className=" d-flex align-items-center gap-1">
                  <i className="ri-login-circle-line" />
                  {' '}
                  Login
                </Link>

                <Link to="/home" className=" d-flex align-items-center gap-1">
                  <i className="ri-user-line" />
                  {' '}
                  Register
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* =============== header middle =========== */}
      <div className="header__middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className=" d-flex align-items-center gap-2">
                    <i className="ri-car-line" />
                    <span>
                      Rent Car
                      {' '}
                      <br />
                      {' '}
                      Service
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i className="ri-earth-line" />
                </span>
                <div className="header__location-content">
                  <h4>Egypt</h4>
                  <h6>Assuit City, Egypt</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i className="ri-time-line" />
                </span>
                <div className="header__location-content">
                  <h4>Sunday to Friday</h4>
                  <h6>10am - 7pm</h6>
                </div>
              </div>
            </Col>

            <Col
              lg="2"
              md="3"
              sm="0"
              className=" d-flex align-items-center justify-content-end "
            >
              <button className="header__btn btn" type="button">
                <Link to="/contact">
                  <i className="ri-phone-line" />
                  {' '}
                  Request a call
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ========== main navigation =========== */}

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu" role="button" tabIndex={0} onClick={toggleMenu} onKeyDown={(event) => { if (event.key === 'Enter') { toggleMenu(); } }}>
              <i
                id="menuToggle"
                className="ri-menu-line"
                aria-label="Toggle Menu"
              />
            </span>

            <div
              className="navigation"
              ref={menuRef}
              onClick={toggleMenu}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  toggleMenu();
                }
              }}
              role="button"
              tabIndex={0}
            >
              <div className="menu">
                {navLinks.map((item) => (
                  <NavLink
                    to={item.path}
                    className="nav__item"
                    key={item.path}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="nav__right">
              <div className="search__box">
                <input type="text" placeholder="Search" />
                <span>
                  <i className="ri-search-line" />
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
