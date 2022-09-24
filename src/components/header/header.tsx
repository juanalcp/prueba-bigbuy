import logo from "assets/images/logo.svg";
import { Icon } from "components";

import "./styles.scss";

const Header = () => {
  return (
    <div className="header">
      <Icon src={logo} alt="logo" />
    </div>
  );
};

export default Header;
