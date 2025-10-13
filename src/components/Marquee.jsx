import styles from "./Marquee.module.css";

const icons = [
  { src: "/icons/html.svg", label: "HTML" },
  { src: "/icons/css.svg", label: "CSS" },
  { src: "/icons/javascript.svg", label: "JavaScript" },
  { src: "/icons/react.svg", label: "React" },
  { src: "/icons/nextjs-icon.svg", label: "Next.js" },
  { src: "/icons/figma.svg", label: "Figma" },
  { src: "/icons/git.svg", label: "Git" },
  { src: "/icons/java.svg", label: "Java" },
  { src: "/icons/mysql.svg", label: "MySql" },
  { src: "/icons/postgresql.svg", label: "PostgreSQL" },
];

export default function Marquee() {
  const loop = [...icons, ...icons];

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
