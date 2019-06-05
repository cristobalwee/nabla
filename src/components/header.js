import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import logo from '../assets/logo.svg';
import searchIcon from '../assets/icon_search.svg';

class Header extends React.Component {
  render() {
    const { selected } = this.props;
    return (
      <header className='header'>
        <Link to='/'><img src={ logo } alt='Nabla logo'></img></Link>
        <div className='header-links'>
          <p className={ 'link' + (selected === 'companies' ? ' selected' : '') }><Link to='/companies/'>Companies</Link></p>
          <p className={ 'link' + (selected === 'people' ? ' selected' : '') }><Link to='/people/'>People</Link></p>
          <p className={ 'link' + (selected === 'about' ? ' selected' : '') }><Link to='/about/'>About</Link></p>
          <p className='link'><Link to='/about/'><img className='icon' src={ searchIcon } alt='Search'></img></Link></p>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  selected: PropTypes.string
}

export default Header;
