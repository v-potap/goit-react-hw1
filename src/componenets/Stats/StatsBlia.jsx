import React from 'react';
import PropTypes from 'prop-types';
import stylesStats from './Stats.module.css';

const Stats = ({ title, statProps }) => (
  <section className={stylesStats.statsSection}>
    {title && <h2 className={stylesStats.title}>{title}</h2>}

    <ul className={stylesStats.statList}>
      {statProps.map(stat => {
        const shadowOfGrey = Math.floor(Math.random() * 6) * 50;
        return (
          <li
            className={stylesStats.statItem}
            key={stat.id}
            style={{
              backgroundColor: `rgb(${shadowOfGrey}, ${shadowOfGrey}, ${shadowOfGrey})`,
              color: `rgb(${255 - shadowOfGrey}, ${255 - shadowOfGrey}, ${255 -
                shadowOfGrey})`,
            }}
          >
            <span className={stylesStats.label}>{stat.label}</span>
            <span className={stylesStats.percentage}>{stat.percentage}%</span>
          </li>
        );
      })}
    </ul>
  </section>
);

Stats.defaultProps = {
  title: '',
};

Stats.propTypes = {
  title: PropTypes.string,
  statProps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number,
    }),
  ).isRequired,
};

export default Stats;
