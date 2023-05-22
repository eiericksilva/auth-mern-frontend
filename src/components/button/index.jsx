const Button = ({ children, type = "submit", onClick }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className="text-[#ffffff] p-3 font-bold bg-[#1B1F3B] border-0 rounded-md hover:cursor-pointer hover:bg-[#000315]"
    >
      {children}
    </button>
  );
};

export default Button;
