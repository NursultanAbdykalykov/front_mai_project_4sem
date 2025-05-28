import React from "react";
import { useState } from "react";
import styles from "./styles.module.scss";
import photoIconUrl from "../../shared/assets/icons/photoIcon.svg";
import { PhotoCard } from "../../components/PhotoCard";
import { ProgressSection } from "../../components/ProgresSection";
import { useWindowWidth } from "../../shared/assets/hooks/useWindowWidth";

export const ResultLayout = () => {
  const screenWidth = useWindowWidth();
  const [uploadedPhotos] = useState([
    "/images/bicycle.png",
    "/images/smartphone.png",
    "/images/t-shirt.png",
    "/images/table.png",
    "/images/jeans.png",
  ]);

  const totalPhotos = uploadedPhotos.length;
  const [processedPhotos] = useState(1);
  const progressPercentage = Math.round((processedPhotos / totalPhotos) * 100);

  const handleDownload = (photoUrl) => {
    const link = document.createElement("a");
    link.href = photoUrl;
    const fileName = photoUrl.split("/").pop() || "restored-photo";
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const currentDateTime = new Date().toLocaleString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const handleDownloadAll = () => {
    uploadedPhotos.forEach((photo) => {
      handleDownload(photo);
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <img src={photoIconUrl} alt="Фото" />
        Ожидайте обработки фотографий
      </div>
      <div className={styles.titleDescription}>
        <p>Заварите чай пока наш искусственный интеллект</p>
        <p>обрабатывает ваш запрос</p>
      </div>
      <div className={styles.resultContainer}>
        <ProgressSection
          progressPercentage={progressPercentage}
          processedPhotos={processedPhotos}
          totalPhotos={totalPhotos}
          currentDateTime={currentDateTime}
        />

        <div className={styles.photosContainer}>
          {uploadedPhotos.map((photo, index) => (
            <PhotoCard
              key={index}
              photo={photo}
              width={screenWidth > 700 ? 258 : 561}
              height={screenWidth > 700 ? 329 : 716}
              type="download"
              onClick={() => handleDownload(photo)}
            />
          ))}
        </div>
      </div>
      <button className={styles.downloadAllButton} onClick={handleDownloadAll}>
        Скачать все фотографии
      </button>
    </div>
  );
};
