import React from 'react';
import styles from './Profile.module.scss';
import {useSelector} from 'react-redux';

function Profile() {
  const user = useSelector((state) => state.user);
  return (
    <div className={styles.profile}>
      <img className={styles.profile__avatar} src={user.image} alt={user.alt} />
      <p className={styles.profile__name}>{`${user.firstName} ${user.lastName}`}</p>
      <p className={styles.profile__description}>{user.description}</p>
    </div>
  )
};

export default Profile
