import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCX_9TjxAvx2BaeUh-8pOxy3CcUgGpIpac",
  authDomain: "full-stack-react-a2ef2.firebaseapp.com",
  projectId: "full-stack-react-a2ef2",
  storageBucket: "full-stack-react-a2ef2.firebasestorage.app",
  messagingSenderId: "423562245604",
  appId: "1:423562245604:web:08b2f23a7df67cce7703f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
