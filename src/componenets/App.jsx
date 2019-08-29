import React from 'react';

import Profile from './Profile/Profile';
import Stats from './Stats/StatsBlia';
import PricingPlan from './PricingPlan/PricingPlan';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import user from './Profile/user.json';
import statInfo from './Stats/Stats.json';
import pricingPlanItems from './PricingPlan/pricing-plan.json';
import transactions from './TransactionHistory/transactions.json';

const App = () => (
  <>
    <Profile info={user} />
    <Stats title="Upload stats" statProps={statInfo} />
    <PricingPlan items={pricingPlanItems} />
    <TransactionHistory items={transactions} />
  </>
);

export default App;
