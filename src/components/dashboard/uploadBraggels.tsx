import React, { useEffect, useState } from "react";
import FileService from "../../service/fileService";
import BraggelUploadForm from "./braggelUploadForm";

const UploadBraggels = () => {
  const [braggels, setbraggels] = useState<string[]>([])
  const [specialBraggels, setspecialBraggels] = useState<string[]>([])
  const [messages, setmessages] = useState<string[]>([])

  useEffect(() => {
    getBragels();
  }, [])

  const getBragels = () =>{
    getActiveBraggels();
    getSpecialBraggels();
  }

  useEffect(() => {
    const timer = setTimeout(() => setmessages([]), 10000);
    return () => {clearInterval(timer);}
  }, [braggels, specialBraggels])

  const getActiveBraggels = async () => {
    const res = await FileService.getBraggels("braggels");
    const data = res.data
    setbraggels(data)
  }

  const getSpecialBraggels = async () => {
    const res = await FileService.getBraggels("specialebraggels");
    const data = res.data
    setspecialBraggels(data)
  }

  const deleteBraggel = async (filename: string, type: string) => {
    const res = await FileService.deletebraggel(filename, type);
    setmessages([...messages, res.data.message + " " + filename])
    getBragels();
  }

  const uploadMaandelijksebraggel = async (e) =>
  {
    e.preventDefault();
    const formData = new FormData(e.target);
    const res = await FileService.uploadFile(formData, "braggels")
    setmessages([...messages, res.data.message + " " + e.target.file.value])
    getBragels();
  }
  
  const uploadSpecialebraggel = async (e) =>
  {
    e.preventDefault();
    const formData = new FormData(e.target);
    const res = await FileService.uploadFile(formData, "specialebraggels")
    setmessages([...messages, res.data.message + " " + e.target.file.value])
    getSpecialBraggels()
  }

  return (
    <div className="update-braggels">
      <h1>Upload Braggels</h1>
      
      {messages && messages.map(message => (
        <div className="center-div"><p className="ok">{message}</p></div>
      ))}
      <h2>Maandelijkse braggels</h2>
      <BraggelUploadForm braggels={braggels} uploadbraggel={uploadMaandelijksebraggel} deleteBraggel={deleteBraggel} path='braggels'/>
      <h2>Speciale braggels</h2>
      <BraggelUploadForm braggels={specialBraggels} uploadbraggel={uploadSpecialebraggel} deleteBraggel={deleteBraggel} path='specialebraggels'/>
    </div>
  );
};

export default UploadBraggels;
