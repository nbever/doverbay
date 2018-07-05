import React from 'react';
import PropTypes from 'prop-types';

import {
  withRouter
} from 'react-router-dom';

const QuickLinks = ({links, history, prefix}) => {
  
  const linkDisplay = links.map( (link) => {
    return (
      <div 
        className="link"
        key={link.text}
        onClick={() => { 
          history.push(`${prefix}/#${link.anchor}`); 

          const titleElement = document.getElementById(link.anchor);
          titleElement.scrollIntoView();
        }}
      >
        <div className={`image icon ${link.image}`} />
        <div className="label">{link.text}</div>
      </div>
    );
  }); 

  return (
    <div className="quick-links">
      {linkDisplay}
    </div>
  );
};

QuickLinks.propTypes = {
  history: PropTypes.object,
  prefix: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    image: PropTypes.string,
    anchor: PropTypes.string
  }))
};

export default withRouter(QuickLinks);