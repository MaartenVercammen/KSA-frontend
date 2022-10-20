import React, { useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import FileService from '../../../service/fileService';
import BraggelUploadForm from './braggelUploadForm';

import styles from './uploadBraggels.module.css';

function UploadBraggels() {
  const [braggels, setbraggels] = useState<string[]>([]);
  const [specialBraggels, setspecialBraggels] = useState<string[]>([]);

  const alert = useAlert();

  const getActiveBraggels = async () => {
    const res = await FileService.getBraggels('braggels');
    const { data } = res;
    setbraggels(data);
  };
  const getSpecialBraggels = async () => {
    const res = await FileService.getBraggels('specialebraggels');
    const { data } = res;
    setspecialBraggels(data);
  };
  const getBragels = () => {
    getActiveBraggels();
    getSpecialBraggels();
  };

  useEffect(() => {
    getBragels();
  }, []);

  const deleteBraggel = async (filename: string, type: string) => {
    try {
      const res = await FileService.deletebraggel(filename, type);
      alert.show(`${res.data.message} ${filename}`);
      getBragels();
    } catch (error: any) {
      alert.error(error.message);
    }
  };

  const uploadMaandelijksebraggel = async (e) => {
    e.preventDefault();
    try {
      if (!e.target.file.value.endsWith('.pdf')) {
        alert.show('Upload PDF file');
        return;
      }
      const formData = new FormData(e.target);
      const res = await FileService.uploadFile(formData, 'braggels');
      alert.show(`${res.data.message} ${e.target.file.value.slice(12)}`);
      getBragels();
    } catch (error: any) {
      alert.error(error.message);
    }
  };

  const uploadSpecialebraggel = async (e) => {
    e.preventDefault();
    try {
      if (!e.target.file.value.endsWith('.pdf')) {
        alert.show('Upload PDF file');
        return;
      }
      const formData = new FormData(e.target);
      const res = await FileService.uploadFile(formData, 'specialebraggels');
      alert.show(`${res.data.message} ${e.target.file.value.slice(12)}`);
      getSpecialBraggels();
    } catch (error: any) {
      alert.error(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Upload Braggels</h1>
      <div className={styles.card}>
        <h2>Maandelijkse braggels</h2>
        <BraggelUploadForm
          braggels={braggels}
          uploadbraggel={uploadMaandelijksebraggel}
          deleteBraggel={deleteBraggel}
          path="braggels"
        />
      </div>
      <div className={styles.card}>
        <h2>Speciale braggels</h2>
        <BraggelUploadForm
          braggels={specialBraggels}
          uploadbraggel={uploadSpecialebraggel}
          deleteBraggel={deleteBraggel}
          path="specialebraggels"
        />
      </div>
    </div>
  );
}

export default UploadBraggels;
