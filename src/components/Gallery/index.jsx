import React, { useState, useRef } from "react";
import styles from "./styles.module.scss";
import SliderWithCounter from "/src/components/Gallery/sliderWithCounter.jsx";
import downloadIconUrl from "./downloadIcon.svg";
import photoIconUrl from "./photoIcon.svg";


export const Gallery = () => {
  const [uploadedPhotos, setUploadedPhotos] = useState([
    "/images/bicycle.png",
    "/images/smartphone.png",
    "/images/t-shirt.png",
    "/images/table.png",
  ]);

  const scrollContainer = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollMax = 300;

  const handleUpload = (event) => {
    const files = Array.from(event.target.files);
    const newPhotos = files.map((file) => URL.createObjectURL(file));
    setUploadedPhotos((prev) => [...prev, ...newPhotos]);
  };

  const handleRemove = (index) => {
    setUploadedPhotos((prev) => prev.filter((_, i) => i !== index));
  };

  const handleScroll = () => {
    const container = scrollContainer.current;
    const scrollRatio =
      container.scrollLeft / (container.scrollWidth - container.clientWidth);
    setScrollPosition(scrollRatio * scrollMax);
  };

  const handleSliderMove = (e) => {
    const container = scrollContainer.current;
    const newScrollLeft =
      (e.clientX / scrollMax) * (container.scrollWidth - container.clientWidth);
    container.scrollLeft = newScrollLeft;
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
        <label className={styles.uploadBox}>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleUpload}
            hidden
          />
          <img
            src={downloadIconUrl}
            alt="Upload"
            className={styles.uploadIcon}
            height={48}
            width={48}
          />
          <span>Загрузите фотографию</span>
        </label>
        <div className={styles.controls}>
          <div className={styles.titleControls}>Настройте обработку</div>
          <label>
            <SliderWithCounter />
            <div className={styles.description}>Удаление шумов</div>
          </label>
          <label>
            <SliderWithCounter />
            <div className={styles.description}>Контраст</div>
          </label>
          <button className={styles.processButton}>Обработать</button>
        </div>
      </div>

      <div className={styles.titlePhotosContainer}>Загруженные фото</div>

      {/* Контейнер с фото */}
      <div
        className={styles.photosContainer}
        ref={scrollContainer}
        onScroll={handleScroll}
      >
        {uploadedPhotos.map((photo, index) => (
          <div key={index} className={styles.photo}>
            <div className={styles.card}>
              <img
                src={photo}
                alt={`Uploaded ${index}`}
                className={styles.image}
                width={120}
                height={150}
              />
              <button
                className={styles.deleteButton}
                onClick={() => handleRemove(index)}
                aria-label="Удалить фотографию"
              >
                ×
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Кастомный ползунок */}
      <div className={styles.sliderTrack} onMouseMove={handleSliderMove}>
        <div
          className={styles.sliderThumb}
          style={{ left: `${scrollPosition}px` }}
        />
      </div>
    </div>
  );
};
