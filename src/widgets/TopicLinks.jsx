import React from 'react';

import {
  withRouter
} from 'react-router-dom';

const TopicLinks = ({history}) => {
  
  const goto = (location) => {
    history.push(location);
  }

  return (
    <div className="topic-links flex">
      <div className="link-halve flex">
        <div 
          className="big-link"
          onClick={() => { goto('/activities'); }}
        >
          <div 
            className="image icon icon-activities" 
            style={{ paddingTop: '5px' }}
          />
          <div className="label">Activities</div>
        </div>
        <div 
          className="big-link"
          onClick={() => { goto('/food'); }}
        >
          <div className="image icon icon-food" />
          <div className="label">Food and Treats</div>
        </div>
      </div>
      <div className="link-halve flex">
        <div 
          className="big-link"
          onClick={() => { goto('/whereis'); }}
        >
          <div className="image icon icon-faq" />
          <div className="label">Where is...</div>
        </div>
        <div 
          className="big-link"
          onClick={() => { goto('/tech'); }}
        >
          <div className="image icon icon-tech-help"/>
          <div className="label">Tech Help</div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(TopicLinks);