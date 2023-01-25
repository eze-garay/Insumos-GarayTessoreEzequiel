
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDgd1lUDjb4fxYI_T3v-ys4TluOds8GS1M",
  authDomain: "insumosreact.firebaseapp.com",
  projectId: "insumosreact",
  storageBucket: "insumosreact.appspot.com",
  messagingSenderId: "302739215503",
  appId: "1:302739215503:web:5846d7f63662d2941a0cfa"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)