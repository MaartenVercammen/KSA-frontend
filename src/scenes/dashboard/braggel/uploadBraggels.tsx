import React, {
  FormEvent, FormEventHandler,
  lazy, useEffect, useRef, useState,
} from 'react';
import MagazineService from '../../../service/magazineService';

import styles from './uploadBraggels.module.css';
import { Magazine as IMagazine, MagazineTypes } from '../../../types';
import ToastManager from '../../../components/toast/ToastManager';

const BraggelUploadForm = lazy(() => import('./braggelUploadForm'));

function UploadBraggels() {
  const monthlyMagazineForm = useRef<HTMLFormElement>(null);
  const specialMagazineForm = useRef<HTMLFormElement>(null);
  const [monthlies, setMonthlies] = useState<IMagazine[]>([]);
  const [specials, setSpecials] = useState<IMagazine[]>([]);

  const fetchMonthlies = async () => {
    const res = await MagazineService.getAll(MagazineTypes.MONTHLY);
    setMonthlies(res);
  };

  const fetchSpecials = async () => {
    const res = await MagazineService.getAll(MagazineTypes.SPECIAL);
    setSpecials(res);
  };

  const fetchMagazines = () => {
    try {
      fetchMonthlies();
      fetchSpecials();
    } catch (err: unknown) {
      if (err instanceof Error) {
        ToastManager.showToast({ label: err.message, variant: 'error' });
      } else {
        ToastManager.showToast({ label: 'Unknown error occurred!', variant: 'error' });
      }
    }
  };

  useEffect(() => {
    fetchMagazines();
  }, []);

  const removeMagazine = async (magazine: IMagazine) => {
    try {
      const res = await MagazineService.remove(magazine);
      ToastManager.showToast({ label: res.message, variant: res.type });
      fetchMagazines();
    } catch (err: unknown) {
      if (err instanceof Error) {
        ToastManager.showToast({ label: err.message, variant: 'error' });
      } else {
        ToastManager.showToast({ label: 'Unknown error occurred!', variant: 'error' });
      }
    }
  };

  const uploadMonthlyMagazine: FormEventHandler = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (monthlyMagazineForm.current) {
        // TODO rework file validation
        const formData = new FormData(monthlyMagazineForm.current);
        const res = await MagazineService.upload(formData);
        ToastManager.showToast({
          label: `${res.message} ${monthlyMagazineForm.current.file.value.slice(12)}`,
          variant: res.type,
        });
        fetchMagazines();
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        ToastManager.showToast({ label: err.message, variant: 'error' });
      } else {
        ToastManager.showToast({ label: 'Unknown error occurred!', variant: 'error' });
      }
    }
  };

  const uploadSpecialMagazine: FormEventHandler = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (specialMagazineForm.current) {
        // TODO rework file validation
        const formData = new FormData(specialMagazineForm.current);
        const res = await MagazineService.upload(formData);
        ToastManager.showToast({
          label: `${res.message} ${specialMagazineForm.current.file.value.slice(12)}`,
          variant: res.type,
        });
        fetchSpecials();
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        ToastManager.showToast({ label: err.message, variant: 'error' });
      } else {
        ToastManager.showToast({ label: 'Unknown error occurred!', variant: 'error' });
      }
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
