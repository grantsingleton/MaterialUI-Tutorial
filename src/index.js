import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyD8EpjVxIAHfoqhAUcYlWQMbgyhGTCfwLs",
  authDomain: "materialui-60490.firebaseapp.com",
  databaseURL: "https://materialui-60490.firebaseio.com",
  projectId: "materialui-60490",
  storageBucket: "materialui-60490.appspot.com",
  messagingSenderId: "480877747326",
  appId: "1:480877747326:web:8016259a03fe7914c88c2f",
  measurementId: "G-EE1QMQ0J24"
};

firebase.initializeApp(firebaseConfig);


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
