import React from 'react';
import { TimelineLite } from 'gsap';
import SEO from '../components/seo';
import Header from '../components/header';
import downArrow from '../assets/down-arrow.svg';
import welcomeImg from '../assets/welcome_image.png';

// https://medium.com/@thetrevorharmon/how-to-make-a-static-site-with-flexible-content-using-gatsby-contentful-f02a5faf1d

class IndexPage extends React.Component {
  constructor(props){
    super(props);
    this.quoteChars = [];
    this.quoteTween = new TimelineLite();
  }

  componentDidMount() {
    require('../styles/index.scss');
  }

  render() {
    this.quoteChars = [];

    return (
      <div className='landing'>
        <SEO title='Home page' />
        <div className='landing-quote section'>
          <h1>Unfair treatment costs companies $16 billion per year</h1>
          <div className='scroll-anchor'>
            <p>Maybe we can do a little better?</p>
            <img src={ downArrow } alt='Scroll down'></img>
          </div>
        </div>
        <Header></Header>
        <div className='welcome section'>
          <div className='content'>
            <img src={ welcomeImg } alt='A man painting'></img>
            <div className='content-text'>
              <h2>Let's get started</h2>
              <p>Check out our database of underrepresented workers in tech and our collection of companies that are doing their part to bridge the gap.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IndexPage;
