import React, { useState } from "react";
import styles from "./styles.module.scss";
import SliderWithCounter from "/src/components/Gallery/components/sliderWithCounter/sliderWithCounter.jsx";
import photoIconUrl from "../../shared/assets/icons/photoIcon.svg";
import { PhotoCard } from "../PhotoCard";
import { UploadPhoto } from "./components/UploadPhoto";
import { useNavigate } from "react-router-dom";

export const Gallery = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/result");
  };

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
        <button className={styles.processButton} onClick={handleClick}>
          Обработать
        </button>
      </div>

      <div className={styles.titlePhotosContainer}>Загруженные фото</div>

      <div className={styles.photosContainer}>
        {uploadedPhotos.map((photo, index) => (
          <PhotoCard
            key={index}
            photo={photo}
            width={222}
            height={315}
            type={close}
            onClick={() => handleRemove(index)}
          />
        ))}
      </div>
    </div>
  );
};
