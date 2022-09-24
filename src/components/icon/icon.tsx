import Props from "./types";

const Icon = ({ src, className, alt }: Props) => {
  return (
    <div className={className}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Icon;
