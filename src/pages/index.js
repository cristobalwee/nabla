import React from 'react';
import { Link } from 'gatsby';
import SEO from '../components/seo';

class IndexPage extends React.Component {
  componentDidMount() {
    require('../styles/index.scss');
  }

  render() {
    return (
      <div className='landing'>
        <SEO title='Home page' />
        <h1>Hello there</h1>
        <Link to='/page-2/'>Go to page 2</Link>
      </div>
    );
  }
}

export default IndexPage;
