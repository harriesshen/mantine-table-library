import PropTypes from 'prop-types';
import { tableDefaultProps, tablePropTypes } from './TablePropsType';
import { OrderDefaultProps, OrderPropTypes } from './OrderPropsType';

export const HeadColorPropTypes = {
  theadBackgroundColor: PropTypes.string, // 表頭背景顏色
  theadTextColor: PropTypes.string, // 表頭文字顏色
};

export const HeadColorDefaultProps = {
  theadBackgroundColor: '#fff', // 表頭背景顏色
  theadTextColor: '#000', // 表頭文字顏色
};

export const HeadPropTypes = {
  ...tablePropTypes.columns,
  ...HeadColorPropTypes,
  ...OrderPropTypes,
  setSortColumn: PropTypes.func,
  sortColumn: PropTypes.object,
  actionColumn: PropTypes.bool,
};

export const HeadDefaultProps = {
  ...tableDefaultProps.columns,
  ...HeadColorDefaultProps,
  ...OrderDefaultProps,
  setSortColumn: () => {},
  sortColumn: { key: '', direction: 'none' },
  actionColumn: false, // 是否有操作功能
};
