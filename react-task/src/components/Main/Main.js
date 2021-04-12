import styles from './Main.module.scss';

function Main({avatar}) {
  return (
    <main className={styles.main}>
      <section className={`${styles.main__avatar} ${styles.avatar}`}>
        <img src={avatar.image} alt={avatar.alt} className={styles.avatar__image}/>
      </section>
    </main>
  )
}

export default Main;
