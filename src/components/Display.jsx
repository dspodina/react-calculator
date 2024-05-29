import PropTypes from "prop-types";

const Display = ({ value }) => {
  return <div className="display">{value}</div>;
};

Display.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
};

export default Display;
