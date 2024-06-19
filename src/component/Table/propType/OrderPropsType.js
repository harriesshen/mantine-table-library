import PropTypes from 'prop-types';

export const OrderPropTypes = {
  order: PropTypes.bool,
  orderColumn: PropTypes.string,
};

export const OrderDefaultProps = {
  order: false, // 排序功能
  orderColumn: '', // 初始化排序的欄位key值
};
