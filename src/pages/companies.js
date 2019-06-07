import React from 'react';
import { TweenMax } from 'gsap';
import SEO from '../components/seo';
import Header from '../components/header';
import Company from '../components/company';
import { data } from '../data/companyData';
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
