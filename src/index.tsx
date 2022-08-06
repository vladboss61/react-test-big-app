import ReactDOM from 'react-dom/client';
import './index.css';
import AppComponent from './AppComponent';
import reportWebVitals from './reportWebVitals';
import React from 'react';

//Include bootstrap styles globally after execution - npm install react-bootstrap bootstrap.
import 'bootstrap/dist/css/bootstrap.min.css';

console.log('Our application is started in index.tsx file.')

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export const GlobalContext = React.createContext<string | null>(null);

root.render(
  <GlobalContext.Provider value='Global Context Value'>
    <AppComponent />
  </GlobalContext.Provider>
);

console.log("Rendered index.tsx");
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
