import React from 'react';
import PropTypes from 'prop-types';

class Person extends React.Component {
  render() {
    const { name, imageUrl } = this.props;
    const backgroundImage = `url('${imageUrl}')`;

    return (
      <div className='person'>
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
