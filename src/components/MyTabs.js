import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MyMap from './MyMap';



function MyTabs() {
  return (
    <Tabs>
    <TabList>
      <Tab>Home</Tab>
      <Tab>School</Tab>
      <Tab>Vacation</Tab>
    </TabList>

    <TabPanel>
      <MyMap laenge={53.64948581033973} breite={12.885443439781158}/>
    </TabPanel>
    <TabPanel>
      <MyMap laenge={53.56644024110484} breite={13.268908159870959}/>
    </TabPanel>
    <TabPanel>
      <MyMap laenge={54.19720427465878} breite={12.145355755523624}/>
    </TabPanel>
  </Tabs>
  )
}   

export default MyTabs