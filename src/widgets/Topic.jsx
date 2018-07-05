import React from 'react';
import PropTypes from 'prop-types';

const Topic = ({title, children, id, image}) => {
  return (
    <div className="topic" id={id}>
      <div className="header">
        <div className={`icon ${image}`} />
        <div className="title">{title}</div>
      </div>
      {children}
    </div>
  );
};

Topic.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
  id: PropTypes.string,
  image: PropTypes.string
};

export default Topic;