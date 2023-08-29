/* eslint-disable react/prop-types */
const TextLimit = ({ text, limit, className }) => {
  const textLimited =
    text && text.length > limit ? `${text.substring(0, limit)}...` : text;
  return <p className={className}>{textLimited}</p>;
};

export default TextLimit;
