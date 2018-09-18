import firebase from 'firebase/app';
import {DB_CONFIG} from './config';

export const FireApp = firebase.initializeApp(DB_CONFIG);