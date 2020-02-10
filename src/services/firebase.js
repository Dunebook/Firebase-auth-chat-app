import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
const config = {
  apiKey: "AIzaSyBzk5hQ1ILipsKI2zlwagfbogOSn9YQBTw",
  authDomain: "chatty-36be6.firebaseapp.com",
  databaseURL: "https://chatty-36be6.firebaseio.com"
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
