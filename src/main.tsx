import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./index.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RecoilRoot>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </RecoilRoot>
)


// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );
// root.render(
//   <RecoilRoot>
//     <React.StrictMode>
//       <Router>
//         <App />
//       </Router>
//     </React.StrictMode>
//   </RecoilRoot>
// );