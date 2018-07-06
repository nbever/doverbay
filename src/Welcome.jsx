import React from 'react';

import ImageScroller from './widgets/ImageScroller';
import TopicLinks from './widgets/TopicLinks';

const Welcome = () => {
  return (
    <div className="info-page welcome">

      <div className="content info-list">
        <div className="content">
          <div className="backdrop map" />
          <div className="center title">
            Welcome to our favorite place:  Dover Idaho!!
          </div>
          <div className="house-pic">
            <ImageScroller
              images={['house', 'pendoreille', 'grill']}
            >
            </ImageScroller>
          </div>
          <p className="center title">
            Below you'll find links to information on the area, our favorites and FAQs about the house.
          </p>
        </div>

        <TopicLinks />
        <p className="about">
          In 2016 our world changed when we spent two weeks in Northern Idaho with our then 3 year old.  Right away we knew we had to find a way to go back as much as possible and this bungalow was perfect.  We hope this area has the same effect on you, and that you enjoy your stay in our home.
        </p>
        <p className="about">
          If you have any other questions or needs to make your stay more comfortable please don't hesitate to contact the wonderful Marina staff:
        </p>
        <div className="flex about">
          <div className="labels">
            <div>Phone:</div>
            <div>Email:</div>
          </div>
          <div>
            <div><b>208-263-5493</b></div>
            <div><a href="mailto:vacationrentals@doverbayidaho.com">vacationrentals@doverbayidaho.com</a></div>
          </div>
        </div>
        <div className="about">
          or for non-urgent items you can reach us at:
          <p>
            <a href="mailto:beverrentals@gmail.com">beverrentals@gmail.com</a>
          </p>
        </div>
        <p className="center about title">
          Thank you for staying with us and we hope to have you back again!
        </p>
      </div>
    </div>
  );
};

export default Welcome;