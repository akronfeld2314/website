import React from 'react';
import { TabList, Tab, Tabs, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './tabMenu.css';
import WelcomeBox from '../welcomeBox/welcomeBox.js';

class TabMenu extends React.Component {
  constructor(props) {
    super(props);
  }
  //getDerivedStateFromProps() {}
  render() {
    return (
      <Tabs>
        <TabList>
          <Tab>Welcome!</Tab>
          <Tab>Guru Maxwell</Tab>
          <Tab>Hire Me?</Tab>
        </TabList>
        <TabPanel>
          <WelcomeBox />
        </TabPanel>
        <TabPanel>
          <GuruMaxwell />
        </TabPanel>
        <TabPanel>
          <Careers />
        </TabPanel>
      </Tabs>
    );
  }
  //componentDidMount()
}

export default TabMenu;