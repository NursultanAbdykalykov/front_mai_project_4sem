import React from "react";
import styles from "./styles.module.scss";

export const PhotoCard = ({ photo, onRemove }) => {
  return (
    <div className={styles.photo}>
      <div className={styles.card}>
        <img
          src={photo}
          alt="Uploaded"
          className={styles.image}
          width={120}
          height={150}
        />
        <button
          className={styles.deleteButton}
          onClick={onRemove}
          aria-label="Удалить фотографию"
        >
          ×
        </button>
      </div>
    </div>
  );
};
