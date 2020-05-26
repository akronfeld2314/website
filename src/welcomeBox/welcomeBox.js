import React from 'react';
import './welcomeBox.css';

class WelcomeBox extends React.Component {
  constructor(props) {
    super(props);
  }
  //getDerivedStateFromProps() {}
  render() {
    return (
      <div className='WelcomeBox'>
        <h1>I've got an idea...</h1>
        <p>
          My name is Alexander Kronfeld.  I was born on Valentine's Day 1992, I'm INTJ-A,
          and since graduating college in 2014, I've had a successful career as a software engineer
          specializing in Full Stack Web Development.

          Enjoy your stay.
        </p>
        <p>

        </p>
      </div>
    );
  }
  //componentDidMount()
}

export default WelcomeBox;