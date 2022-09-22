import axios from "axios";
import { instance, instanceFile } from "../axios";



const uploadFile = (data: FormData, type: string) => instanceFile.post<{type: string, message: string}>("/file?path=" + type, data)

const getBraggels = (path: string) => instance.get<string[]>('/file/braggels?path='+path)

const deletebraggel = (filename: string, path: string) => instance.delete<{type: string, message: string}>('/file/braggels?filename=' + filename + "&path=" + path)

const FileService = {
    uploadFile,
    getBraggels,
    deletebraggel
 };
 
 export default FileService;