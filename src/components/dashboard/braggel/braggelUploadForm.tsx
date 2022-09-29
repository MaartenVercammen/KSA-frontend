import React from "react";
import "./uploadbraggel.css";

type Props = {
  uploadbraggel: React.FormEventHandler;
  braggels: string[];
  path: string;
  deleteBraggel: Function;
};
const BraggelUploadForm = ({
  uploadbraggel,
  braggels,
  path,
  deleteBraggel,
}: Props) => {
  return (
    <div className="braggels-updload-area">
      <form onSubmit={uploadbraggel}>
        <input type="file" name="file" />
        <input type="submit" />
      </form>
      {braggels &&
        braggels.map((b, index) => (
          <p key={index}>
            <a href={process.env.API_URL + "/pdf/" + path + "/" + b}>{b}</a>
            <button className="delete" onClick={(e) => deleteBraggel(b, path)}>
              X
            </button>
          </p>
        ))}
    </div>
  );
};

export default BraggelUploadForm;
