import fetch from './utils/axios'
console.log('hello-world');
fetch()

import logo from './assets/bear.png'
document.getElementById('logo').src = logo

import './assets/style.css'
import './assets/size.scss'

import Dog from './utils/Dog'
new Dog('西卡').run()
//======================react
import React from "react";
import ReactDOM from "react-dom";

import App from "./App.jsx";
ReactDOM.render(<App />, document.getElementById('app'))