import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.updateSelection = this.updateSelection.bind(this);
    this.state = {
      selectedIndex: 0
    };
  }

  updateSelection(idx) {
    this.setState({ selectedIndex: idx });
  }

  render() {
    const { children } = this.props;
    const { selectedIndex } = this.state;

    return (
      <div className='carousel'>
        { children[selectedIndex] }
        <div className='controls'>
          <div onClick={ () => this.updateSelection(0) } className={ 'control-dot' +  (selectedIndex === 0 ? ' selected' : '') }></div>
          <div onClick={ () => this.updateSelection(1) } className={ 'control-dot' +  (selectedIndex === 1 ? ' selected' : '') }></div>
          <div onClick={ () => this.updateSelection(2) } className={ 'control-dot' +  (selectedIndex === 2 ? ' selected' : '') }></div>
        </div>
      </div>
    );
  }
}

export default Carousel;
