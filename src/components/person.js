import React from 'react';
import PropTypes from 'prop-types';

class Person extends React.Component {
  render() {
    const { name, imageUrl, refer } = this.props;
    const backgroundImage = `url('${imageUrl}')`;
    console.log(typeof refer);

    return (
      <div className='person' ref={ refer }>
        <div className='avi-container' style={ { backgroundImage, filter: 'grayscale(100%)' } }></div>
        <h3>{ name }</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta lorem velit.</p>
      </div>
    );
  }
}

Person.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  imageUrl: PropTypes.string
}

export default Person;
