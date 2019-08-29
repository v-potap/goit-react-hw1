import React from 'react';
import PropTypes from 'prop-types';
import UserStats from './UserStats';

import stylesProfile from './Profile.module.css';

const Profile = ({ info }) => (
  <div className={stylesProfile.profile}>
    <div className={stylesProfile.description}>
      <img
        src={info.avatar}
        alt="info avatar"
        className={stylesProfile.avatar}
      />
      <p className={stylesProfile.name}>{info.name}</p>
      <p className={stylesProfile.tag}>{info.tag}</p>
      <p className={stylesProfile.location}>{info.location}</p>
    </div>

    <ul className={stylesProfile.stats}>
      <UserStats
        label="Followers"
        quantity={info.stats.followers.toLocaleString()}
      />
      <UserStats label="Views" quantity={info.stats.views.toLocaleString()} />
      <UserStats label="Likes" quantity={info.stats.likes.toLocaleString()} />
    </ul>
  </div>
);

Profile.defaultProps = {
  info: {
    name: 'USER NAME IS REQUIRED',
  },
};

Profile.propTypes = PropTypes.shape({
  // name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    label: PropTypes.string.isRequired,
    quantity: PropTypes.string.isRequired,
  }).isRequired,
}).isRequired;

export default Profile;
