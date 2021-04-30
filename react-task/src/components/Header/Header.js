import styles from './Header.module.scss';

export default function Header({user}) {
  return (
    <header className={styles.header}>
      <p className={styles.header__user}>{`Name: ${user.firstName}, Last name: ${user.lastName}`}</p>
    </header>
  )
}
