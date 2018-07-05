import React from 'react';
import PropTypes from 'prop-types';

const Banner = ({menuClicked}) => {
  
  return (
    <div className="banner">
      <div className="image">
        <span className="icon icon-idaho" />
        <span className="icon icon-star-full" />
      </div>
      <div className="title">
        Parkside Dover Bay
      </div>
      <div className="us">
        By Bever Rentals
      </div>
      <div className="nav icon icon-menu" onClick={menuClicked}>
      </div>
    </div>
  );
};

Banner.propTypes = {
  menuClicked: PropTypes.func
};

export default Banner;