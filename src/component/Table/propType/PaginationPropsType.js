import PropTypes from 'prop-types';

export const PaginationPropTypes = {
  data: PropTypes.array,
  currentPage: PropTypes.number,
  setPage: PropTypes.func,
  pageSize: PropTypes.number,
  colspan: PropTypes.number,
};

export const PaginationDefaultTypes = {
  data: [],
  currentPage: 1,
  setPage: () => {},
  pageSize: 1,
  colspan: 1,
};
