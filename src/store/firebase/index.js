import firebase from 'firebase';
import {firebaseConfig} from './_config';

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseAuth = firebase.auth();
