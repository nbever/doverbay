import React from 'react';
import PropTypes from 'prop-types';

import {
  withRouter
} from 'react-router-dom';

const Banner = ({menuClicked, history}) => {
  
  const goHome = () => {
    history.push('/home');
  }

  return (
    <div className="banner">
      <div className="image" 
        onClick={goHome}>
        <span className="icon icon-idaho" />
        <span className="icon icon-star-full" />
      </div>
      <div className="title" onClick={goHome}>
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
  menuClicked: PropTypes.func,
  history: PropTypes.object
};

export default withRouter(Banner);