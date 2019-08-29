import React from 'react';
import PropTypes from 'prop-types';

import stylesStats from './UserStats.module.css';

const UserStats = ({ label, quantity }) => (
  <li className={stylesStats.stat}>
    <span className={stylesStats.label}>{label}</span>
    <span className={stylesStats.quantity}>{quantity}</span>
  </li>
);

UserStats.propTypes = {
  label: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
};

export default UserStats;
