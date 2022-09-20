import React, { useEffect, useState } from "react";
import FileService from "../../service/fileService";

const UploadBraggels = () => {
  const [braggels, setbraggels] = useState<string[]>([])
  const [messages, setmessages] = useState<string[]>([])

  useEffect(() => {
    getActiveBraggels();
  }, [])

  const getActiveBraggels = async () => {
    const res = await FileService.getBraggels();
    const data = res.data
    setbraggels(data)
  }

  const deleteBraggel = async (filename: string) => {
    const res = await FileService.deletebraggel(filename);
    setmessages([...messages, res.data.message])
    getActiveBraggels()
  }

  const uploadMaandelijksebraggel = async (e) =>
  {
    e.preventDefault();
    const formData = new FormData(e.target);
    const res = await FileService.uploadFile(formData)
    setmessages([...messages, res.data.message])
    getActiveBraggels()
  }
  
  return (
    <div className="update-braggels">
      <h1>Upload Braggels</h1>
      {messages && messages.map(message => (
        <p>{message}</p>
      ))}
      <h2>Maandelijkse braggels</h2>
      <div>
        <form onSubmit={uploadMaandelijksebraggel}>
          <input type="file" name="file" />
          <input type="submit"/>
        </form>
        {braggels && braggels.map((b, index) => (
        <p key={index}><a href={process.env.API_URL + '/pdf/' + b}>{b}</a><button onClick={e => deleteBraggel(b)}>X</button></p>
        ))}
      </div>
      <h2>Speciale braggels</h2>
      <div>

      </div>
    </div>
  );
};

export default UploadBraggels;
