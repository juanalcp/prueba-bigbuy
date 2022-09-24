import React from "react";
import ReactDOM from "react-dom/client";
import Employees from "views/employees";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import Layout from "views/layouts/default-layout/default-layout";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Layout>
      <Employees />
    </Layout>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
