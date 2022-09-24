import Props from "./types";

import "./styles.scss";

const Card = ({ children, className }: Props) => {
  return <div className={`card ${className}`}>{children}</div>;
};

export default Card;
