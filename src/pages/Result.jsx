import React from "react";
import styles from "./styles.module.scss";
import photoIconUrl from "../shared/assets/icons/photoIcon.svg";

export const Result = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <img src={photoIconUrl} />
        Ожидайте обработки фотографий
      </div>
      <div className={styles.titleDescription}>
        <p>Заварите чай пока наш исскуственный интеллект</p>
        <p>обрабатывает ваш запрос</p>
      </div>
      <div className={styles.resultContainer}></div>
    </div>
  );
};
