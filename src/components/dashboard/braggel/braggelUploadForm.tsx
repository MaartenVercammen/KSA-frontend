import React from 'react';
import './uploadbraggel.css';

type Props = {
  uploadbraggel: React.FormEventHandler;
  braggels: string[];
  path: string;
  deleteBraggel: Function;
};
function BraggelUploadForm({
  uploadbraggel,
  braggels,
  path,
  deleteBraggel,
}: Props) {
  return (
    <div className="braggels-updload-area">
      <form onSubmit={uploadbraggel}>
        <input type="file" name="file" />
        <input type="submit" />
      </form>
      {braggels
        && braggels.map((b) => (
          <p key={b}>
            <a href={`${process.env.API_URL}/pdf/${path}/${b}`}>{b}</a>
            <button type="button" className="delete" onClick={() => deleteBraggel(b, path)}>
              X
            </button>
          </p>
        ))}
    </div>
  );
}

export default BraggelUploadForm;
