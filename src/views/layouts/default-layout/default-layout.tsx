import { Header } from "components";

import Props from "./types";

import "./styles.scss";

const Layout = ({ children }: Props) => (
  <>
    <Header />
    <div className="main-container">{children}</div>
  </>
);

export default Layout;
