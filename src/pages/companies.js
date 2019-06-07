import React from 'react';
import { TweenMax } from 'gsap';
import SEO from '../components/seo';
import Header from '../components/header';
import Company from '../components/company';
import '../styles/index.scss';

class CompaniesPage extends React.Component {
  constructor(props){
    super(props);
    this.companies = [];
    this.companiesTween = null;
  }

  componentDidMount() {
    this.companiesTween = TweenMax.staggerFrom(this.companies, 0.5, {y: +50, autoAlpha: 0}, 0.1);
  }

  render() {
    const data = [
      {
        name: 'Google',
        imageUrl: 'https://www.gannett-cdn.com/-mm-/ac688eec997d2fce10372bf71657297ff863814d/c=171-0-1195-768/local/-/media/2018/06/27/USATODAY/usatsports/google-headquarters-mountain-view-california.jpg'
      },
      {
        name: 'Uber',
        imageUrl: 'https://cdn-images-1.medium.com/max/1600/1*wwHFxnNNnf7xuXFaoESFSw.png'
      },
      {
        name: 'Airbnb',
        imageUrl: 'https://cdn-images-1.medium.com/max/2000/1*obu4DTlPZZF2jOQnqDQf6Q.png'
      },
      {
        name: 'Square',
        imageUrl: 'https://cdn-images-1.medium.com/max/1600/1*VgmC5XvrVIbNmBTGEulJHw.png'
      },
      {
        name: 'Google',
        imageUrl: 'https://www.gannett-cdn.com/-mm-/ac688eec997d2fce10372bf71657297ff863814d/c=171-0-1195-768/local/-/media/2018/06/27/USATODAY/usatsports/google-headquarters-mountain-view-california.jpg'
      },
      {
        name: 'Uber',
        imageUrl: 'https://cdn-images-1.medium.com/max/1600/1*wwHFxnNNnf7xuXFaoESFSw.png'
      },
      {
        name: 'Airbnb',
        imageUrl: 'https://cdn-images-1.medium.com/max/2000/1*obu4DTlPZZF2jOQnqDQf6Q.png'
      },
      {
        name: 'Square',
        imageUrl: 'https://cdn-images-1.medium.com/max/1600/1*VgmC5XvrVIbNmBTGEulJHw.png'
      }
    ];
    this.companies = [];

    return (
      <div className='companies-page'>
        <SEO title='Companies' />
        <Header selected='companies'></Header>
        <div className='companies container'>
          <h2>Companies</h2>
          <div className='companies-container'>
            { data.map((company, i) => (
              <Company
                refer={ element => this.companies[i] = element }
                name={ company.name }
                imageUrl={ company.imageUrl }
                place={ i + 1 }
                key={ i }
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default CompaniesPage;
