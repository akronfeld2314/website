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
          My name is Alexander Kronfeld.  I'm a Software Engineer by profession, but my heart is in the stock market.
          I'm here for two reasons.
          1).  Any web-developer worth his salt in 2020 has a website.
          2).  I want to express my passion for the stock market.
          Since reason 1 is resolved by this website's mere existent,
          most of the actual content will be for reason 2.

          Remedial $tonks - For people who still believe the lie that the stock market is a rich man's game that the poor are locked out of.  Here I'll be starting at level 0,
          showing you how for as little as $1 you can start investing today.
          CNBC-X: For the veterans.  If you already know the stock market or maybe you went through Remedial $tonks and want to stick with me.  Watch as I go full Millenial on an
          industry run by Boomers.
          Careers: For recruiters.  Download my resume, get my professional contact email, and learn a little bit more about who I am in the office.

          Since this website is entirly owned and operated by Me, it is ever expanding and I encourage you to check back regularly if you're looking for new stuff.

          Teaching you how to invest for the future.
        </p>
        <p>

        </p>
      </div>
    );
  }
  //componentDidMount()
}

export default WelcomeBox;