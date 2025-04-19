import React from "react";
import styles from "./styles.module.scss";

export const PhotoCard = ({ photo, onRemove, width, height }) => {
  return (
    <div className={styles.photo}>
      <div className={styles.card}>
        <img
          src={photo}
          alt="Uploaded"
          className={styles.image}
          width={width}
          height={height}
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
