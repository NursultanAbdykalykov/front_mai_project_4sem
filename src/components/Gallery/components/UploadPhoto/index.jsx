import React from "react";
import styles from "./styles.module.scss";
import uploadIconIconUrl from "../../../../shared/assets/icons/uploadIcon.svg";

export const UploadPhoto = ({ onUpload }) => {
  return (
    <label className={styles.uploadBox}>
      <input type="file" multiple accept="image/*" onChange={onUpload} hidden />
      <img src={uploadIconIconUrl} alt="Upload" height={48} width={48} />
      <span>Загрузите фотографию</span>
    </label>
  );
};
