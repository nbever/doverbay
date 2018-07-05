import React from 'react';
import PropTypes from 'prop-types';

import {
  withRouter
} from 'react-router-dom'

const LinkMenu = ({items, open, history}) => {
  
  const displayItems =
    items.map( (item) => {
      return (
        <div 
          key={item.text}
          className="item-row"
          onClick={() => { history.push(item.location); } }
        >
          {item.text}
        </div>
      );
    });

  return (
    <div 
      className="link-menu"
      style={{
        display: open === true ? 'block' : 'none'
      }}
    >
      {displayItems}
    </div>
  );
};

LinkMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    callback: PropTypes.func
  })),
  open: PropTypes.bool,
  history: PropTypes.object
};

LinkMenu.defaultTypes = {
  items: []
};

export default withRouter(LinkMenu);