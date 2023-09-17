// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDNsN7Vd_gePzgZcyBX_yTDxF_hG_kmLeY',
  authDomain: 'sharedragon-b260b.firebaseapp.com',
  projectId: 'sharedragon-b260b',
  storageBucket: 'sharedragon-b260b.appspot.com',
  messagingSenderId: '684483033380',
  appId: '1:684483033380:web:a1eb9bfb5d6cec3dc9dbb1',
  measurementId: 'G-Z7TGQWHXT2',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const analytics = getAnalytics(app)
