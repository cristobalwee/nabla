import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import logo from '../assets/logo.svg';
import searchIcon from '../assets/icon_search.svg';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseHeader: false
    };
    this.renderContent = this.renderContent.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const currSt = window.pageYOffset || document.documentElement.scrollTop;
    this.setState({ collapseHeader: currSt > 100 });
  }

  renderContent() {
    const { selected } = this.props;
    const { collapseHeader } = this.state;
    const classes = 'header-inner' + (collapseHeader ? ' collapsed' : '');

    return (
      <div className={ classes }>
        <Link to='/'><img src={ logo } alt='Nabla logo'></img></Link>
        <div className='header-links'>
          <p className={ 'link' + (selected === 'companies' ? ' selected' : '') }><Link to='/companies/'>Companies</Link></p>
          <p className={ 'link' + (selected === 'people' ? ' selected' : '') }><Link to='/people/'>People</Link></p>
          <p className={ 'link' + (selected === 'about' ? ' selected' : '') }><Link to='/about/'>About</Link></p>
          <p className='link'><Link to='/about/'><img className='icon' src={ searchIcon } alt='Search'></img></Link></p>
        </div>
        <div className='control-dot'></div>
      </div>
    );
  }

  render() {

    return (
      <header className='header'>
        { this.renderContent() }
      </header>
    );
  }
}

Header.propTypes = {
  selected: PropTypes.string
}

export default Header;
