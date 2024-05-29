import PropTypes from "prop-types";

const Button = ({ className, btnValue, onClick }) => {
  return (
    <button className={className} onClick={() => onClick(btnValue)}>
      {btnValue}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string.isRequired,
  btnValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
