const Input = ({ type, placeholder, id, children, onChange, name }) => {
  return (
    <div className="flex  relative">
      <label className="text-xs mb-2 text-[#596643] font-bold" htmlFor={id}>
        {children}
      </label>
      <input
        className="border border-[#a9a9a9] outline-none p-3"
        type={type}
        placeholder={placeholder}
        id={id}
        onChange={onChange}
        name={name}
      />
    </div>
  );
};

export default Input;
