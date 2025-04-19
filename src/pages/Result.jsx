import React from "react";
import { useState } from "react";
import styles from "./styles.module.scss";
import photoIconUrl from "../shared/assets/icons/photoIcon.svg";
import { PhotoCard } from "../components/PhotoCard";

export const Result = () => {
  const [uploadedPhotos, setUploadedPhotos] = useState([
    "/images/bicycle.png",
    "/images/smartphone.png",
    "/images/t-shirt.png",
    "/images/table.png",
    "/images/jeans.png",
  ]);
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
          {uploadedPhotos.map((photo, index) => (
            <PhotoCard
              key={index}
              photo={photo}
              width={258}
              height={329}
              type="download"
              // onClick={() => handleRemove(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
