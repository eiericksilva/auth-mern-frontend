const Button = ({ children }) => {
  return (
    <button
      className="text-[#ffffff] p-3 font-bold bg-[#1B1F3B] border-0 rounded-md hover:cursor-pointer hover:bg-[#000315]"
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;
