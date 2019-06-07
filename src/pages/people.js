import React from 'react';
import { TweenMax } from 'gsap';
import SEO from '../components/seo';
import Header from '../components/header';
import Person from '../components/person';
import '../styles/index.scss';

class PeoplePage extends React.Component {
  constructor(props){
    super(props);
    this.people = [];
    this.peopleTween = null;
  }

  componentDidMount() {
    this.peopleTween = TweenMax.staggerFrom(this.people, 0.5, {y: +50, autoAlpha: 0}, 0.1);
  }

  render() {
    const data = [
      {
        name: 'Burt Macklin',
        imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80'
      },
      {
        name: 'Burt Macklin',
        imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80'
      },
      {
        name: 'Burt Macklin',
        imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80'
      },
      {
        name: 'Burt Macklin',
        imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80'
      },
      {
        name: 'Burt Macklin',
        imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80'
      },
      {
        name: 'Burt Macklin',
        imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80'
      },
      {
        name: 'Burt Macklin',
        imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80'
      },
      {
        name: 'Burt Macklin',
        imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80'
      }
    ];
    this.people = [];

    return (
      <div className='people-page'>
        <SEO title='People' />
        <Header selected='people'></Header>
        <div className='people container'>
          <h2>People</h2>
          <div className='people-container'>
            { data.map((person, i) => (
              <Person
                refer={ element => this.people[i] = element }
                name={ person.name }
                imageUrl={ person.imageUrl }
                key={ i }
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default PeoplePage;
