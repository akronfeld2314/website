import React from '../../node_modules/react';
import './welcomeBox.css';

class WelcomeBox extends React.Component {
  constructor(props) {
    super(props);
  }
  //getDerivedStateFromProps() {}
  render() {
    return (
      <div class='WelcomeBox'>
        <h1>Software Engineer, Stock Market Enthusiast, INTJ-A, Gamer, Raver, Runner, Would do unspeakable things for 5 minutes of Elon Musk's undivided attention.</h1>
      </div>
    );
  }
  //componentDidMount()
}

export default WelcomeBox;