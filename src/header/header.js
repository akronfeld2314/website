import React from 'react';
import './header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  //getDerivedStateFromProps() {}
  render() {
    return (
      <div className='Header'>
        <div className="quoteBox">
          <p className="Link">
            "Give me the Courage to accept that which I cannot change,
          </p>
          <p className="Ganondorf">
            the Power to change that which I can,
          </p>
          <p className="Zelda">
            and the Wisdom to know the difference."
          </p>
        </div>
      </div>
    );
  }
  //componentDidMount()
}

export default Header;