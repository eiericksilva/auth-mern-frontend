const Button = ({
  children,
  type = "submit",
  onClick,
  className,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`${className} text-[#ffffff] p-3 font-bold bg-slate-600 border-0 rounded-md hover:cursor-pointer hover:bg-slate-500`}
    >
      {children}
    </button>
  );
};

export default Button;
