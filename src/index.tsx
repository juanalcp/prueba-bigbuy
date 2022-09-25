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
