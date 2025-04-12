// components/PhotoCard/PhotoCard.jsx
import React from "react";
import styles from "./styles.module.scss";

export const PhotoCard = ({ imageUrl, onDelete, className = "" }) => {
  return (
    <div className={`${styles.card} ${className}`}>
      <button
        className={styles.deleteButton}
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}
        aria-label="Удалить карточку"
      >
        ×
      </button>
      <img src={imageUrl} alt="Загруженное фото" className={styles.image} />
    </div>
  );
};
