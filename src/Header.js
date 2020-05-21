import React from 'react';
import ReactDOM from 'react-dom';
import './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  //getDerivedStateFromProps() {}
  render() {
    return (
      <div class='Header'>
        <h1>Welcome!</h1>
        <div class="quoteBox">
          <p class="Link">
            "Give me the Courage to accept that which I cannot change,
          </p>
          <p class="Ganondorf">
            the Power to change that which I can,
          </p>
          <p class="Zelda">
            and the Wisdom to know the difference."
          </p>
        </div>
      </div>
    );
  }
  //componentDidMount()
}

export default Header;