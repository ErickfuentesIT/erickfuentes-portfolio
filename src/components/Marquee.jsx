import styles from "./Marquee.module.css";
import { stackIcons } from "./../data/stack";

export default function Marquee() {
  const loop = [...stackIcons, ...stackIcons];

  return (
    <div className={styles.marquee}>
      <div className={styles.track}>
        {loop.map((it, i) => (
          <div className={styles.item} key={i}>
            <img src={it.src} alt={it.label} />
            <span>{it.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
