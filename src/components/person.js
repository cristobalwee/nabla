import React from 'react';
import PropTypes from 'prop-types';
import linkedin from '../assets/social_linkedin.svg';
import twitter from '../assets/social_twitter.svg';

class Person extends React.Component {
  render() {
    const { name, imageUrl, refer } = this.props;
    const backgroundImage = `url('${imageUrl}')`;

    return (
      <div className='person' ref={ refer }>
        <div className='avi-container' style={ { backgroundImage, filter: 'grayscale(100%)' } }></div>
        <div className='person-title'>
          <h3>{ name }</h3>
          <div>
            <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'><img src={ linkedin } alt='Linkedin'></img> </a>
            <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'><img src={ twitter } alt='Twitter'></img></a>
          </div>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta lorem velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta lorem velit.</p>
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
