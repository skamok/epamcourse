import styles from './Main.module.scss';
import CardsContainer from '../Cards';

function Main({avatar}) {
  return (
    <main className={styles.main}>
      <section className={styles.avatar}>
        <img src={avatar.image} alt={avatar.alt} className={styles.avatar__image}/>
      </section>
      <CardsContainer />
    </main>
  )
}

export default Main;
