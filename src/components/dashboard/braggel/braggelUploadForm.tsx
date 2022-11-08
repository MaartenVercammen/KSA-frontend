import React, { ForwardedRef } from 'react';

import styles from './braggelUploadForm.module.css';
import { Magazine as IMagazine, MagazineTypes } from '../../../types';

type Props = {
  uploadHandler: React.FormEventHandler;
  magazines: IMagazine[];
  type: MagazineTypes,
  removeMagazine: Function;
};
const BraggelUploadForm = React.forwardRef(({
  type, magazines, uploadHandler, removeMagazine,
} : Props, ref : ForwardedRef<HTMLFormElement>) => (
  <div className={styles.container}>
    <form onSubmit={uploadHandler} ref={ref}>
      <input type="hidden" name="type" value={type} />
      <input type="file" name="file" />
      <button type="submit">Uploaden</button>
    </form>
    {magazines
        && magazines.map((magazine) => (
          <p key={magazine.id}>
            <a href={`${process.env.BASE_URL}${magazine.path}`}>{magazine.title}</a>
            <button type="button" className={styles.delete} onClick={() => removeMagazine(magazine)}>
              X
            </button>
          </p>
        ))}
  </div>
));

export default BraggelUploadForm;
