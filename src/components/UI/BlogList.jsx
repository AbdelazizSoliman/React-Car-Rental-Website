import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';
import '../../styles/blog-item.css';
import { Link } from 'react-router-dom';
import blogData from '../../assets/data/blogData';

const BlogList = () => (
  <>
    {blogData.map((item) => (
      <BlogItem item={item} key={item.id} />
    ))}
  </>
);

const BlogItem = ({ item }) => {
  const {
    imgUrl, title, author, date, description, time,
  } = item;

  return (
    <Col lg="4" md="6" sm="6" className="mb-5">
      <div className="blog__item">
        <img src={imgUrl} alt="" className="w-100" />
        <div className="blog__info p-3">
          <Link to={`/blogs/${title}`} className="blog__title">
            {title}
          </Link>
          <p className="section__description mt-3">
            {description.length > 100
              ? description.substr(0, 100)
              : description}
          </p>

          <Link to={`/blogs/${title}`} className="read__more">
            Read More
          </Link>

          <div className="blog__time pt-3 mt-3 d-flex align-items-center justify-content-between">
            <span className="blog__author">
              <i className="ri-user-line" />
              {' '}
              {author}
            </span>

            <div className=" d-flex align-items-center gap-3">
              <span className=" d-flex align-items-center gap-1 section__description">
                <i className="ri-calendar-line" />
                {' '}
                {date}
              </span>

              <span className=" d-flex align-items-center gap-1 section__description">
                <i className="ri-time-line" />
                {' '}
                {time}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

BlogItem.propTypes = {
  item: PropTypes.shape({
    imgUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogList;
