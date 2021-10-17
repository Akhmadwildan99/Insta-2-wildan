import { initializeApp, getApps, getApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBNx853QWLRYZ_8XoEw-EpUYYFwUEBkxso",
  authDomain: "insta-2-wildan.firebaseapp.com",
  projectId: "insta-2-wildan",
  storageBucket: "insta-2-wildan.appspot.com",
  messagingSenderId: "32634773290",
  appId: "1:32634773290:web:6c7115c27b540208080853"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();

export { app, db, storage };