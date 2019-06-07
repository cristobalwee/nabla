import React from 'react';
import SEO from '../components/seo';
import Header from '../components/header';
import Carousel from '../components/carousel';
import welcomeImg from '../assets/welcome_image.png';
import '../styles/index.scss';
// import downArrow from '../assets/down-arrow.svg';
// https://medium.com/@thetrevorharmon/how-to-make-a-static-site-with-flexible-content-using-gatsby-contentful-f02a5faf1d
// https://www.gatsbyjs.org/docs/adding-page-transitions-with-plugin-transition-link/
// <div className='landing-quote section'>
//   <h1>Unfair treatment costs companies $16 billion per year</h1>
//   <div className='scroll-anchor'>
//     <p>Maybe we can do a little better?</p>
//     <img src={ downArrow } alt='Scroll down'></img>
//   </div>
// </div>

class IndexPage extends React.Component {
  render() {
    return (
      <div className='landing'>
        <SEO title='Home' />
        <Header></Header>
        <div className='diversity-graph-container container'>
          <h2>Tech is not very diverse</h2>
          <div className='diversity-graph'>
            <div className='legend'>
              <p>Employees in tech</p>
              <p>Employees in workforce</p>
            </div>
            <div className='bar-container white-americans'>
              <div className='bar tech'><h3>69%</h3></div>
              <div className='bar population'><h3>64%</h3></div>
              <p>White Americans</p>
            </div>
            <div className='bar-container asian-americans'>
              <div className='bar tech'><h3>14%</h3></div>
              <div className='bar population'><h3>6%</h3></div>
              <p>Asian Americans</p>
            </div>
            <div className='bar-container hispanics'>
              <div className='bar tech'><h3>8%</h3></div>
              <div className='bar population'><h3>14%</h3></div>
              <p>Hispanics</p>
            </div>
            <div className='bar-container african-americans'>
              <div className='bar tech'><h3>7%</h3></div>
              <div className='bar population'><h3>14%</h3></div>
              <p>African Americans</p>
            </div>
          </div>
        </div>
        <div className='diversity-women container'>
          <h2>Women still see tech as an unfriendly sector</h2>
          <Carousel>
            <div className='diversity-women-2'>
              <div className='facts'>
                <div className='fact-left'>
                  <p>1985</p>
                  <h1>35%</h1>
                </div>
                <div className='fact-right'>
                  <p>2018</p>
                  <h2>17%</h2>
                </div>
              </div>
              <p>Women accounted for around 35% of all computer science majors in 1985; today, that number has gone down to nearly 17%.</p>
            </div>
            <div className='diversity-women-1'>
              <h1 className='big'>41%</h1>
              <p>Approximately 41% of women in tech leave their careers over time because of a hostile work environment.</p>
            </div>
            <div className='diversity-women-3'>
              <table>
                <tbody>
                  <tr>
                    <th className='right'><p>Field</p></th>
                    <th className='center'><p>1990</p></th>
                    <th className='center'><p>2016</p></th>
                  </tr>
                  <tr>
                    <td className='right'><p className='bold'>Life science</p></td>
                    <td className='center'><h3>34%</h3></td>
                    <td className='center'><h3>47%</h3></td>
                  </tr>
                  <tr>
                    <td className='right'><p className='bold'>Physical science</p></td>
                    <td className='center'><h3>22%</h3></td>
                    <td className='center'><h3>39%</h3></td>
                  </tr>
                  <tr>
                    <td className='right'><p className='bold'>Computer science</p></td>
                    <td className='center'><h3>32%</h3></td>
                    <td className='center'><h3>25%</h3></td>
                  </tr>
                </tbody>
              </table>
              <p>Women’s representation has consistently gone up in almost every single STEM field since 1990 - computer science being one notable exception.</p>
            </div>
          </Carousel>
        </div>
        <div className='container'>
          <div className='welcome'>
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
