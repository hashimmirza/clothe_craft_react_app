const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DB_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MSG_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID


//
//   VITE_FIREBASE_API_KEY=AIzaSyCzxoe3LBBRIwaONnkhnprgyit0mWg_HU4
//   VITE_FIREBASE_AUTH_DOMAIN=clothe-craft.firebaseapp.com
//   ; VITE_FIREBASE_DB_URL=https://clothe-craft-default-rtdb.firebaseio.com/users.json
// VITE_FIREBASE_PROJECT_ID=clothe-craft
// VITE_FIREBASE_STORAGE_BUCKET=clothe-craft.firebasestorage.app
// VITE_FIREBASE_MSG_SENDER_ID=14716751496
// VITE_FIREBASE_APP_ID=1:14716751496:web:2e7b80abe2d705cc48d93d



};

export default firebaseConfig;
