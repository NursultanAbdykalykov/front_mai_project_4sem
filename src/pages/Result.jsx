import React from "react";
import styles from "./styles.module.scss";
import photoIconUrl from "../shared/assets/icons/photoIcon.svg";
import { PhotoCard } from "../components/PhotoCard";

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
      <div className={styles.resultContainer}>
        <div className={styles.downloadInformation}></div>
        <div className={styles.photosContainer}>
          <PhotoCard width={250} height={250} />
          <PhotoCard width={150} height={150} />
          <PhotoCard width={150} height={150} />
          <PhotoCard width={150} height={150} />
          <PhotoCard width={150} height={150} />
          <PhotoCard width={150} height={150} />
        </div>
      </div>
    </div>
  );
};
