const defaultProps = {
  fill: "#fff",
  className: "",
  onClick: ()=>{},
};
function SvgLeftAngle({ fill, onClick, className }: typeof defaultProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      className={className}
      onClick={onClick}
    >
      <path
        d="M13 16l-4-4 4-4"
        stroke={fill}
        strokeWidth={3}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
SvgLeftAngle.defaultProps = defaultProps;
export default SvgLeftAngle;
