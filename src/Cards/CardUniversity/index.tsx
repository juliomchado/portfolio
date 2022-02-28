
import styles from './styles.module.scss';

interface CardStudyProps {
  initialProjectYear: string;
  finalProjectYear: string;
  title: string;
  universityName: string;
}

export function CardUniversity({
  initialProjectYear,
  finalProjectYear,
  title,
  universityName
}: CardStudyProps) {
  return (
    <section className={styles.container}>
      <p className={styles.card_years}>{initialProjectYear} <span>-</span> {finalProjectYear}</p>
      <b >{title}</b>
      <p>{universityName}</p>
    </section>
  );
}