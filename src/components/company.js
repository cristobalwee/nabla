import React from 'react';
import PropTypes from 'prop-types';

class Company extends React.Component {
  render() {
    const { name, imageUrl, place, refer } = this.props;
    const backgroundImage = `url('${imageUrl}')`;

    return (
      <div className='company' ref={ refer }>
        <div className='avi-container' style={ { backgroundImage, filter: 'opacity(60%)' } }></div>
        <h3 className='place'>{ place }</h3>
        <div className='company-title'>
          <h3>{ name }</h3>
          <h3>100</h3>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta lorem velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta lorem velit.</p>
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
