import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <label>
      <span>Find contacts by name</span>
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;