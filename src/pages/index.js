import React from 'react';
import { Link } from 'gatsby';
import SEO from '../components/seo';
import downArrow from '../assets/down-arrow.svg';
import '../styles/index.scss';

// https://medium.com/@thetrevorharmon/how-to-make-a-static-site-with-flexible-content-using-gatsby-contentful-f02a5faf1d
// https://www.gatsbyjs.org/docs/adding-page-transitions-with-plugin-transition-link/
// https://popmotion.io/pose/examples/splittext-as-children/

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.header = null;
  }

  componentDidMount() {
    const enteredText = this.header.innerHTML;
    const splitText = enteredText.split("\r\n");
    console.log(splitText);
  }

  render() {
    const quotes = [
      'Unfair treatment costs companies $16 billion per year',
      '83% of tech executives are white',
      'Diversity efforts in tech could net $400B/year'
    ];
    const rand = Math.floor(Math.random() * 3);
    const quote = quotes[rand];

    let classes = ''
    if (rand === 1) classes = 'big';

    return (
      <div className='landing-quote section'>
        <SEO title='Home' />
        <div className='h1-wrapper'><h1 ref={ el => this.header = el } className={ classes }>{ quote }</h1></div>
        <div className='scroll-anchor'>
          <Link to='/landing/'><p>Maybe we can do a little better?</p></Link>
          <img src={ downArrow } alt='Scroll down'></img>
        </div>
      </div>
    );
  }
}

export default IndexPage;
