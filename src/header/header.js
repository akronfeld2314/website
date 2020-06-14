import React from 'react';
import './header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  };

  render() {
    return (
      <div className='Header' id='Header'>
        <div className='quoteBox'>
          <p className='Link'>
            "Give me the Courage to accept that which I cannot change,
          </p>
          <p className='Ganondorf'>
            the Power to change that which I can,
          </p>
          <p className='Zelda'>
            and the Wisdom to know the difference."
          </p>
        </div>
        <div className='rightBar'>
          <p>About Me</p>
          <p>Remedial $tonks</p>
          <p>CNBCX</p>
        </div>
      </div>
    );
  };
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll(event) {
    let element = document.getElementById('Header');
    if (element.offsetTop <= 10) {
      element.style.backgroundColor = 'rgb(211, 211, 211, .5)';
    } else {
      element.style.backgroundColor = 'rgb(0, 174, 239, 1)';
    }
  };
}

export default Header;