import React, {
  lazy, useEffect, useRef, useState,
} from 'react';
import { useAlert } from 'react-alert';
import MagazineService from '../../../service/magazineService';

import styles from './uploadBraggels.module.css';
import { Magazine as IMagazine, MagazineTypes } from '../../../types';

const BraggelUploadForm = lazy(() => import('./braggelUploadForm'));

function UploadBraggels() {
  const monthlyMagazineForm = useRef<HTMLFormElement>(null);
  const specialMagazineForm = useRef<HTMLFormElement>(null);
  const [monthlies, setMonthlies] = useState<IMagazine[]>([]);
  const [specials, setSpecials] = useState<IMagazine[]>([]);

  const alert = useAlert();

  const fetchMonthlies = async () => {
    const res = await MagazineService.getAll(MagazineTypes.MONTHLY);
    setMonthlies(res);
  };

  const fetchSpecials = async () => {
    const res = await MagazineService.getAll(MagazineTypes.SPECIAL);
    setSpecials(res);
  };

  const fetchMagazines = () => {
    fetchMonthlies();
    fetchSpecials();
  };

  useEffect(() => {
    fetchMagazines();
  }, []);

  const removeMagazine = async (magazine: IMagazine) => {
    try {
      console.log(magazine);
      const res = await MagazineService.remove(magazine);
      alert.show(`${res.message} ${magazine.title}`);
      fetchMagazines();
    } catch (error: any) {
      alert.error(error.message);
    }
  };

  const uploadMonthlyMagazine = async (e) => {
    e.preventDefault();
    try {
      if (monthlyMagazineForm.current) {
        // TODO rework file validation
        const formData = new FormData(monthlyMagazineForm.current);
        const res = await MagazineService.upload(formData);
        alert.show(`${res.message} ${monthlyMagazineForm.current.file.value.slice(12)}`);
        fetchMagazines();
      }
    } catch (error: any) {
      alert.error(error.message);
    }
  };

  const uploadSpecialMagazine = async (e) => {
    e.preventDefault();
    try {
      if (specialMagazineForm.current) {
        // TODO rework file validation
        const formData = new FormData(specialMagazineForm.current);
        const res = await MagazineService.upload(formData);
        alert.show(`${res.message} ${specialMagazineForm.current.file.value.slice(12)}`);
        fetchSpecials();
      }
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
          magazines={monthlies}
          uploadHandler={uploadMonthlyMagazine}
          removeMagazine={removeMagazine}
          type={MagazineTypes.MONTHLY}
          ref={monthlyMagazineForm}
        />
      </div>
      <div className={styles.card}>
        <h2>Speciale braggels</h2>
        <BraggelUploadForm
          magazines={specials}
          uploadHandler={uploadSpecialMagazine}
          removeMagazine={removeMagazine}
          type={MagazineTypes.SPECIAL}
          ref={specialMagazineForm}
        />
      </div>
    </div>
  );
}

export default UploadBraggels;
