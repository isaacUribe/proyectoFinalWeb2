import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {v4} from 'uuid'

const firebaseConfig = {
  apiKey: "AIzaSyAZveAQR4M0_UjDWsAG--oeHZirFp6KK48",
  authDomain: "empresa-ce39a.firebaseapp.com",
  projectId: "empresa-ce39a",
  storageBucket: "empresa-ce39a.appspot.com",
  messagingSenderId: "1013112793955",
  appId: "1:1013112793955:web:a6ec6b47ae3e789b6e4156"
};

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app)
export const storage = getStorage(app)

export const subirImagen = async (file) => {
  const uploadImg = ref(storage, v4())
  await uploadBytes(uploadImg, file)
  const urlImg = await getDownloadURL(uploadImg)
  return urlImg
}
export const actualizarImagen = async (existingFile, newFile) => {

    const existingRef = ref(storage, existingFile);
    const newRef = ref(storage, uuidv4()); 
    await put(newRef, newFile);
    await deleteObject(existingRef);
    const urlImg = await getDownloadURL(newRef);
  
    return urlImg;
  };

  
  
  
  