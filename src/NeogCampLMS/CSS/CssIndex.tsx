import React from "react";
import styles from "./index.module.css";

function CssIndex() {
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <div className={styles.heading}>
            <span>Basic</span>
            <div>
              <span>$20</span>
              <span>/mo</span>
            </div>
          </div>
          <p>
            Our Basic plan if perfect for small teams and startups looking to
            manage a few projects.
          </p>
          <div>
            <ul>
              <li>
                <span className={styles.tick}>✔</span>
                <div>5 Projects</div>
              </li>
              <li>
                <span className={styles.tick}>✔</span>10GB Storage
              </li>
              <li>
                <span className={styles.cross}>❌</span>Advanced Analytics
              </li>
              <li>
                <span className={styles.cross}>❌</span>Priority Support
              </li>
              <li>
                <span className={styles.tick}>✔</span>Unlimited Users
              </li>
              <li>
                <span className={styles.tick}>✔</span>24/7 Support
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CssIndex;
