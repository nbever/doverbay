import React from 'react';
import PropTypes from 'prop-types';

class ImageScroller extends React.Component{
  
  constructor(props) {
    super(props);

    this.state = {
      visibleIndex: -1
    };
  }

  getImageBlock = () => {
    const imageMap = this.props.images.map( (image, index) => {
      return (
        <div 
          key={`${image}-${index}`}
          className={`image-block ${image}`}
          style={{
            opacity: index === this.state.visibleIndex ?
              1.0 : 0.0
          }}
        />
      );
    });

    return imageMap;
  }

  componentWillMount() {
    this.switchImages();
  }

  switchImages = () => {
    this.timeout = setTimeout(this.switchImages, 8000);

    const nextIndex = this.state.visibleIndex + 1;

    this.setState({
      ...this.state,
      visibleIndex: nextIndex < this.props.images.length ?
        nextIndex : 0
    });
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    return (
      <div className="image-scroller">
        {this.getImageBlock()}
      </div>
    );
  }
};

ImageScroller.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string)
};

export default ImageScroller;