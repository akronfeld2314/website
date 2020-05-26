import React from 'react';
import './workingTitle.css';
import ReactPlayer from 'react-player';
import BoeingMoment from "./BoeingMoment.mp4"

class WorkingTitle extends React.Component {
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
          Operation Cubic-M (working title) was the spark that ignited this website.  As much as I
          love software development, investing is my passion.  After years of investing, learning
          about the stock market, and even dabbling in strategies as lucrative as playing options
          during the global COVID Pandemic, I want to pass on what I learned.  If I can make even
          one person realize that they too can invest in the market, that it isn't just a rich
          man's game, then Cubic-M will be a success.  And to my vetarins, my day traders, my r/WSB
          readers, don't roll your eyes and alt-tab out.  I've got something for you too.  I
          encourage all to watch my pilot video which dispells the biggest myth about investing
          in the 21st century and then gives both the noobs and the vets something to checkout.
        </p>
      </div>
    );
  }
  //componentDidMount()
}

export default WorkingTitle;