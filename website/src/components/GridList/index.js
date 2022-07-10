import React from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import Link from "@docusaurus/Link";

export default function GridList({ customStyle, data = [], wrapperClassName }) {
  const isMobileDevice = /Mobi|Android|iPhone/i.test(navigator.userAgent);
  return (
    <div
      style={customStyle}
      className={clsx(
        styles.grid,
        isMobileDevice && styles.mobileGrid,
        wrapperClassName
      )}
    >
      {data.map((item) => {
        return (
          <div key={item.title} className={styles.cardWrapper}>
            <Link to={item.link} className={styles.card}>
              <img
                src={item.src}
                className={clsx(
                  isMobileDevice ? styles.imageMobile : styles.image,
                  styles.imageActive
                )}
                alt={item.title}
              />
            </Link>
            <div className={styles.title}>{item.title}</div>
          </div>
        );
      })}
    </div>
  );
}
