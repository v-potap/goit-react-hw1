import React from 'react';

import Profile from './Profile/Profile';
import Stats from './Stats/StatsBlia';
// import PricingItem from './PricingItem/PricingItem';
// import TransactionHistory from './TransactionHistory/TransactionHistory';

import user from './Profile/user.json';
import statInfo from './Stats/Stats.json';

const App = () => (
  <>
    <Profile info={user} />
    <Stats title="Upload stats" statProps={statInfo} />
  </>
);

export default App;
