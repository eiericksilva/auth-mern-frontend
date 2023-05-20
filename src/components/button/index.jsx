const Button = ({ children }) => {
  return (
    <button
      className="text-white p-3 font-bold bg-[#596643] border-0 rounded-md hover:cursor-pointer hover:bg-[#475236]"
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;
