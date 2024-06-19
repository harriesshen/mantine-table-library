import PropTypes from 'prop-types';

export const tablePropTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array,
};

export const tableDefaultProps = {
  columns: [],
  data: [],
};
