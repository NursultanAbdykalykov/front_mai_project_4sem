import React, { useState } from "react";
import styles from "./styles.module.scss";
import SliderWithCounter from "/src/components/Gallery/components/sliderWithCounter/sliderWithCounter.jsx";
import photoIconUrl from "../../shared/assets/icons/photoIcon.svg";
import { PhotoCard } from "./components/PhotoCard";
import { UploadPhoto } from "./components/UploadPhoto";

export const Gallery = () => {
  const [uploadedPhotos, setUploadedPhotos] = useState([
    "/images/bicycle.png",
    "/images/smartphone.png",
    "/images/t-shirt.png",
    "/images/table.png",
  ]);

  const handleUpload = (event) => {
    const files = Array.from(event.target.files);
    const newPhotos = files.map((file) => URL.createObjectURL(file));
    setUploadedPhotos((prev) => [...prev, ...newPhotos]);
  };

  const handleRemove = (index) => {
    setUploadedPhotos((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.title}>
        <img src={photoIconUrl} />
        Старые фото — новая жизнь
      </div>
      <div className={styles.titleDescription}>
        <p>Вернуть к жизни старые фотографии? Легко!</p>
        <p>Придайте старым фото яркие цвета с помощью</p>
        <p>нашего сервиса!</p>
      </div>

      <div className={styles.uploadSection}>
        <UploadPhoto onUpload={handleUpload} />

        <div className={styles.controls}>
          <div className={styles.titleControls}>Настройте обработку</div>
          <SliderWithCounter
            id="noiseReduction"
            label="Удаление шумов"
            description="Удаление шумов"
          />
          <SliderWithCounter
            id="contrast"
            label="Контраст"
            description="Контраст"
          />

          <button className={styles.processButton}>Обработать</button>
        </div>
      </div>

      <div className={styles.titlePhotosContainer}>Загруженные фото</div>

      <div className={styles.photosContainer}>
        {uploadedPhotos.map((photo, index) => (
          <PhotoCard
            key={index}
            photo={photo}
            onRemove={() => handleRemove(index)}
          />
        ))}
      </div>
    </div>
  );
};
