import React from 'react';
import './welcomeBox.css';
import profile from './profile.jpg';

class WelcomeBox extends React.Component {
  constructor(props) {
    super(props);
  }
  //getDerivedStateFromProps() {}
  render() {
    return (
      <div className='WelcomeBox'>
        <div className='profileDiv'>
          <img src={profile} width='500' height='650' className='profile'></img>
        </div>
        <h1>I have an idea...</h1>
        <p>
          My name is Alexander Kronfeld.  I'm a Software Engineer by profession, but my heart is in the stock market.
        </p>
        <p>
          I'm here for two reasons.
        </p>
        <p>
          1).  Any web-developer worth his salt in 2020 has a website.
        </p>
        <p>
          2).  I want to express my passion for the stock market.
        </p>
        <p>
          Since reason 1 is resolved by this website's mere existent,
          most of the actual content will be for reason 2.
        </p>
        <p>
          Remedial $tonks - For people who still believe the lie that the stock market is a rich man's game that the poor are locked out of.  Here I'll be starting at level 0,
          showing you how for as little as $1 you can start investing today.
        </p>
        <p>
          CNBC-X: For the veterans.  If you already know the stock market or maybe you went through Remedial $tonks and want to stick with me.  Watch as I go full Millenial on an
          industry run by Boomers.
          Careers: For recruiters.  Download my resume, get my professional contact email, and learn a little bit more about who I am in the office.
        </p>
        <p>
          Since this website is entirly owned and operated by Me, it is ever expanding and I encourage you to check back regularly if you're looking for new stuff.
        </p>
        <p>
          Teaching you how to invest for the future.
        </p>
      </div>
    );
  }
  //componentDidMount()
}

export default WelcomeBox;