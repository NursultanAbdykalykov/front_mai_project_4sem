import React, { useState, useRef } from "react";
import styles from "./styles.module.scss";

export const Gallery = () => {
  const [uploadedPhotos, setUploadedPhotos] = useState([]);
  const [noiseReduction, setNoiseReduction] = useState(25);
  const [contrast, setContrast] = useState(40);
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
      <div className={styles.title}>Старые фото — новая жизнь</div>
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
          <span>Загрузите фотографию</span>
        </label>
        <div className={styles.controls}>
          <div className={styles.titleControls}>Настройте обработку</div>
          <label>
            <input
              type="range"
              min="0"
              max="100"
              value={noiseReduction}
              onChange={(e) => setNoiseReduction(e.target.value)}
            />
            <div className={styles.description}>Удаление шумов</div>
          </label>
          <label>
            <input
              type="range"
              min="0"
              max="100"
              value={contrast}
              onChange={(e) => setContrast(e.target.value)}
            />
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
            <img
              src={photo}
              alt={`Uploaded ${index}`}
              className={styles.image}
            />
            <span
              className={styles.closeBtn}
              onClick={() => handleRemove(index)}
            >
              ✖
            </span>
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
