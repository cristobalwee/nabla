import React from 'react';
import PropTypes from 'prop-types';

class Company extends React.Component {
  render() {
    const { name, imageUrl, place } = this.props;
    const backgroundImage = `url('${imageUrl}')`;

    return (
      <div className='company'>
        <div className='avi-container' style={ { backgroundImage, filter: 'opacity(60%)' } }></div>
        <h3 className='place'>{ place }</h3>
        <h3>{ name }</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta lorem velit.</p>
      </div>
    );
  }
}

Company.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  imageUrl: PropTypes.string,
  place: PropTypes.number
}

export default Company;
