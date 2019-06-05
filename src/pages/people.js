import React from 'react';
import SEO from '../components/seo';
import Header from '../components/header';
import Person from '../components/person';

class PeoplePage extends React.Component {
  componentDidMount() {
    require('../styles/index.scss');
  }

  render() {
    return (
      <div className='people-page'>
        <SEO title='People page' />
        <Header selected='people'></Header>
        <div className='people'>
          <h2>People</h2>
          <div className='people-container'>
            <Person
              name='Burt Macklin'
              imageUrl='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80'
            />
            <Person
              name='Burt Macklin'
              imageUrl='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80'
            />
            <Person
              name='Burt Macklin'
              imageUrl='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80'
            />
            <Person
              name='Burt Macklin'
              imageUrl='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80'
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PeoplePage;
