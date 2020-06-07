import React from 'react';
import './cnbcX.css';
import ReactPlayer from 'react-player';
import BoeingMoment from "./BoeingMoment.mp4"

class CNBCX extends React.Component {
  constructor(props) {
    super(props);
  }
  //getDerivedStateFromProps() {}
  render() {
      return (
      <div className='player-wrapper'>
        <ReactPlayer
          className="player"
          url={BoeingMoment}
          muted={true}
          playing={true}
          controls={true}
        />
        <p>
          One of the first investments I ever made was in the mutual fund FSCSX, Fidelity's Select Software Fund.  Funds like these like to put out fancy "Objective"
          Statments that find really fancy ways to say "we're buying these stocks because we think they will make us money".

          Well CNBC-X is a fund I'm creating.  Here's the official "Objective Statment".

          It is this Fund's opinion that the imminent demise of cable news has gone largley unnoticed.  This has lead them to compromise journalistic integrity
          for life-extending ratings to much degrees not fully priced into the market.  The fund aims to caputre this by inversing sentiment expressed by CNBC. 

          YUP.  I'm going to take $1000 and just inverse CNBC.  It's simple.  I watch 9-10, 12-1, and Mad Money from 6-7 becuase as much as I love Jim Cramer, telling
          his boomer audience to get into Tesla at 800 and praising Boeing in 2020 was the straw that broke the Camel's back.  I do that every day, track what stocks they
          mention and general market sentiment, add a pinch of my own good judgment, and then make a play based on trends I saw in the last 2 weeks.

          With an election coming up, a fresh bailout to watch disintegrate in the hands of failing corporations, and the world's favorite Tech Stocks in the
          President's crosshairs, its going to be fun.
        </p>
      </div>
    );
  }
  //componentDidMount()
}

export default CNBCX;