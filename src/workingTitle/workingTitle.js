import React from 'react';
import './workingTitle.css';
import { ReactPlayer } from 'react-player';

class WorkingTitle extends React.Component {
  constructor(props) {
    super(props);
  }
  //getDerivedStateFromProps() {}
  render() {
    return (
      <div className='player-wrapper'>
        <ReactPlayer
          url="videos/BoeingMoment.mp4"
          playing
        />
      </div>
    );
  }
  //componentDidMount()
}

export default WorkingTitle;