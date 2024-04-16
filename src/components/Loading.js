import React from "react";
import styles from "./Loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loader}>
        <div className={`${styles.circle} ${styles.circle1}`}></div>
        <div className={`${styles.circle} ${styles.circle2}`}></div>
        <div className={`${styles.circle} ${styles.circle3}`}></div>
        <div className={`${styles.circle} ${styles.circle4}`}></div>
      </div>
    </div>
  );
};

export default Loading;
