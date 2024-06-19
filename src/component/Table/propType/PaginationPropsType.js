import PropTypes from 'prop-types';

export const PaginationPropTypes = {
  data: PropTypes.array,
  currentPage: PropTypes.number,
  setPage: PropTypes.func,
};

export const PaginationDefaultTypes = {
  data: [],
  currentPage: 1,
  setPage: () => {},
};
