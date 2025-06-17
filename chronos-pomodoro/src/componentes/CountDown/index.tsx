import { HomeProps } from '../../pages/Home';
import styles from './styles.module.css';

export function CountDown({ state }: HomeProps) {
  // return <div className={styles.countDown}>00:00</div>;
  return (
    <div className={styles.countDown}>{state.formattedSecondsRemaining}</div>
  );
}
