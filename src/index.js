import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './frontend/App';
import reportWebVitals from './frontend/reportWebVitals';

//import CharacterList from './frontend/list'
//import CharacterList from './backend/charactersFunction/characterslist';
//import CharacterList from "./backend/chara/CharacterList";

//import AppR from './funciona/findList';

import AppR from "./components/AppR"
import Header from './components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <AppR/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
