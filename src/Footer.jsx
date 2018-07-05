import React from 'react';

const Footer = () => {
  
  return (
    <div className="footer">
      <div style={{paddingTop: '8px' }}>605 Pomrankey Loop - Dover ID, 83825</div>
      <div>
        <span>Marina - </span> 
        <span style={{paddingRight: '4px'}}>Tel: <a href="tel:208-263-5493">208-263-5493</a></span>
        <span>Email: <a href="mailto:vacationrentals@doverbayidaho.com">vacationrentals@doverbayidaho.com</a></span>
      </div>
      <div style={{ paddingBottom: '8px' }}>
        <span>Us - </span>
        <a href="mailto:beverrentals@gmail.com">beverrentals@gmail.com</a>
      </div>
    </div>
  );
};

export default Footer;