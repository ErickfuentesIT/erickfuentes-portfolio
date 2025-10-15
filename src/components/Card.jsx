import { useState, useRef } from "react";
import styles from "./Projects.module.css";
import Tag from "./Tag";

export default function Card({ project }) {
  const imgs = Array.isArray(project.image)
    ? project.image
    : Array.isArray(project.images)
    ? project.images
    : project.image
    ? [project.image]
    : [];

  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i - 1 + imgs.length) % imgs.length);
  const next = () => setIndex((i) => (i + 1) % imgs.length);

  const startX = useRef(0);
  const onTouchStart = (e) => (startX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - startX.current;
    if (dx > 40) prev();
    if (dx < -40) next();
  };

  return (
    <div className={styles.card} key={project.title}>
      <div className={styles.cardContent}>
        {/* Carousel */}
        {imgs.length > 0 && (
          <div
            className={styles.carousel}
            role="region"
            aria-label={`${project.title} gallery`}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              className={styles.carouselTrack}
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {imgs.map((src, i) => (
                <div className={styles.slide} key={`${project.title}-${i}`}>
                  <img
                    className={styles.slideImg}
                    src={src}
                    alt={`${project.title} ${i + 1}`}
                  />
                </div>
              ))}
            </div>

            {imgs.length > 1 && (
              <>
                <button
                  className={`${styles.ctrl} ${styles.ctrlLeft}`}
                  onClick={prev}
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  className={`${styles.ctrl} ${styles.ctrlRight}`}
                  onClick={next}
                  aria-label="Next image"
                >
                  ›
                </button>

                <div
                  className={styles.dots}
                  role="tablist"
                  aria-label="Slide navigation"
                >
                  {imgs.map((_, i) => (
                    <button
                      key={i}
                      role="tab"
                      aria-selected={i === index}
                      className={`${styles.dot} ${
                        i === index ? styles.dotActive : ""
                      }`}
                      onClick={() => setIndex(i)}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>

        <div className={styles.cardFooter}>
          <a href={project.githubUrl} target="_blank" rel="noreferrer">
            <img src="GitHub.png" alt="GitHub" />
          </a>
          <a href={project.projectDemoUrl} target="_blank" rel="noreferrer">
            <img src="world-icon.webp" alt="Live demo" />
          </a>
        </div>
      </div>
    </div>
  );
}
