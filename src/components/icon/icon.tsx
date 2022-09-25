import Props from "./types";

import "./styles.scss";

const Icon = ({ src, className, alt, onClick }: Props) => {
  const completedClassName = onClick ? "icon-container" : "";
  return (
    <div className={` ${completedClassName} ${className ? className : ""}`}>
      <img src={src} alt={alt ?? src} onClick={onClick} />
    </div>
  );
};

export default Icon;
