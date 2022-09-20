import axios from "axios";
import { instance, instanceFile } from "../axios";



const uploadFile = (data: FormData) => instanceFile.post<{type: string, message: string}>("/file", data)

const getBraggels = () => instance.get<string[]>('/file/braggels')

const deletebraggel = (filename: string) => instance.delete<{type: string, message: string}>('/file/braggels?filename=' + filename)

const FileService = {
    uploadFile,
    getBraggels,
    deletebraggel
 };
 
 export default FileService;