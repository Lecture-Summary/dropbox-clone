import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDqWSXniZq4vcpyRry7Up1BGeq0d8-FCkM',
  authDomain: 'dropbox-clone-48a23.firebaseapp.com',
  projectId: 'dropbox-clone-48a23',
  storageBucket: 'dropbox-clone-48a23.appspot.com',
  messagingSenderId: '866423693674',
  appId: '1:866423693674:web:9accea19df8247a171c513',
}

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app)

export { db, storage }
