import Link from "next/link";

import "./Header.scss";

const Header = props => (
  <div className="Header">
    <img className="Logo" src="/static/images/logo.png" alt={props.appName} />
  </div>
);

export default Header;