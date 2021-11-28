import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
const firebase = require("firebase");
require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBl3voQDWxHzBEHu09-h04jrQ_t2gz2YHg",
  authDomain: "evernote-clone-76b02.firebaseapp.com",
  projectId: "evernote-clone-76b02",
  storageBucket: "evernote-clone-76b02.appspot.com",
  messagingSenderId: "215837137002",
  appId: "1:215837137002:web:91967322a3e3475718d213",
  measurementId: "G-YS00ZJ2XQF"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("evernote-container"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
