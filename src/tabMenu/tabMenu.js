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
        <TabPanel disabled="true">

        </TabPanel>
      </Tabs>
    );
  }
  //componentDidMount()
}

export default TabMenu;