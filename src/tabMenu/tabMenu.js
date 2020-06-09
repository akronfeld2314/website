import React from 'react';
import { TabList, Tab, Tabs, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './tabMenu.css';
import WelcomeBox from '../welcomeBox/welcomeBox.js';
import RemedialStocks from '../remedialStocks/remedialStocks.js';
import CNBCX from '../cnbcX/cnbcX.js';

class TabMenu extends React.Component {
  constructor(props) {
    super(props);
  }
  //getDerivedStateFromProps() {}
  render() {
    return (
      <Tabs>
        <TabList>
          <Tab>Welcome Box</Tab>
          <Tab>Remedial $tonks</Tab>
          <Tab>CNCB-X</Tab>
          <Tab className='construction' disabled={true}>Careers<span className='construction-text'>Coming Soon</span></Tab>
        </TabList>
        <TabPanel>
          <WelcomeBox />
        </TabPanel>
        <TabPanel>
          <RemedialStocks />
        </TabPanel>
        <TabPanel>
          <CNBCX />
        </TabPanel>
        <TabPanel>

        </TabPanel>
      </Tabs>
    );
  }
  //componentDidMount()
}

export default TabMenu;