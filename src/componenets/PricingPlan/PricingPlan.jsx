import React from 'react';
import PricingItem from './PricingItem';
import styles from './PricingPlan.module.css';

const PricingPlan = ({ items }) => {
  return (
    <ul className={styles.pricingPlan}>
      {items.map(item => (
        <li className={styles.item} key={item.label}>
          <PricingItem
            label={item.label}
            icon={item.icon}
            capacity={item.capacity}
            price={item.price}
            description={item.description}
          />
        </li>
      ))}
    </ul>
  );
};

export default PricingPlan;
