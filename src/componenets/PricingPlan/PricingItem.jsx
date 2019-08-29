import React from 'react';
import styles from './PricingItem.module.css';

const PricingItem = ({ label, icon, capacity, price, description }) => {
  const bgColor = label;
  return (
    <div className={styles.pricingItem}>
      <img className={styles.icon} src={icon} alt={label} />
      <h2 className={styles.label}>{label}</h2>
      <p className={styles.capacity}>{`${capacity} Storage`}</p>
      <p className={styles.description}>{description}</p>
      <p className={styles.price}>${price}/MO</p>
      <button
        style={{ backgroundColor: `${bgColor}` }}
        className={styles.button}
      >
        Get Started
      </button>
    </div>
  );
};

export default PricingItem;
