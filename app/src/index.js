import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';

import CounterContainer from "./components/Counter/containers/CounterContainer";
// import Routes from "./routes/Routes";


ReactDOM.render(
  <React.StrictMode>
    <CounterContainer/>
  </React.StrictMode>,
   document.getElementById('root')           
);

{/* <React.StrictMode>
<BrowserRouter>
  <Routes />
</BrowserRouter>
</React.StrictMode>, */}