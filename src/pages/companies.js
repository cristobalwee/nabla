import React from 'react';
import SEO from '../components/seo';
import Header from '../components/header';
import Company from '../components/company';

class CompaniesPage extends React.Component {
  componentDidMount() {
    require('../styles/index.scss');
  }

  render() {
    return (
      <div className='companies-page'>
        <SEO title='Companies page' />
        <Header selected='companies'></Header>
        <div className='companies'>
          <h2>Companies</h2>
          <div className='companies-container'>
            <Company
              name='Google'
              imageUrl='https://www.gannett-cdn.com/-mm-/ac688eec997d2fce10372bf71657297ff863814d/c=171-0-1195-768/local/-/media/2018/06/27/USATODAY/usatsports/google-headquarters-mountain-view-california.jpg'
              place={ 1 }
            />
            <Company
              name='Uber'
              imageUrl='https://cdn-images-1.medium.com/max/1600/1*wwHFxnNNnf7xuXFaoESFSw.png'
              place={ 2 }
            />
            <Company
              name='Airbnb'
              imageUrl='https://cdn-images-1.medium.com/max/2000/1*obu4DTlPZZF2jOQnqDQf6Q.png'
              place={ 3 }
            />
            <Company
              name='Square'
              imageUrl='https://cdn-images-1.medium.com/max/1600/1*VgmC5XvrVIbNmBTGEulJHw.png'
              place={ 4 }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CompaniesPage;
