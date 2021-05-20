import React from 'react';
import PropTypes from "prop-types";
import styles from './Profile.module.scss';

function Profile({user}) {
  return (
    <div className={styles.profile}>
      <img className={styles.profile__avatar} src={user.image} alt={user.alt} />
      <p className={styles.profile__name}>{`${user.firstName} ${user.lastName}`}</p>
      <p className={styles.profile__description}>{user.description}</p>
    </div>
  )
};

Profile.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    image: PropTypes.string,
    alt: PropTypes.string,
    description: PropTypes.string
  }).isRequired,
};

export default Profile
