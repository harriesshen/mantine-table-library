import PropTypes from 'prop-types';
import { tableDefaultProps, tablePropTypes } from './TablePropsType';

export const BodyColorPropTypes = {
  striped: PropTypes.bool,
  tbodyOddBackgroundColor: PropTypes.string,
  tbodyOddTextColor: PropTypes.string,
  tbodyEvenBackgroundColor: PropTypes.string,
  tbodyEvenTextColor: PropTypes.string,
};

export const BodyColorDefaultProps = {
  striped: false, // 顯示單數偶數表格顏色
  tbodyOddBackgroundColor: '#fff', // 表身基數背景顏色
  tbodyOddTextColor: '#000', // 表身基數文字顏色
  tbodyEvenBackgroundColor: '#e9eaea', // 表身偶數背景顏色
  tbodyEvenTextColor: '#000', // 表身偶數背景顏色
};

export const BodyEditButtonPropTypes = {
  showEdit: PropTypes.bool,
  editTextColor: PropTypes.string,
  editBgColor: PropTypes.string,
  editClick: PropTypes.func,
};

export const BodyEditButtonDefaultProps = {
  showEdit: false,
  editTextColor: '',
  editBgColor: '',
  editClick: (value) => {
    console.log('this is a edit click', value);
  },
};

export const BodyDeleteButtonPropTypes = {
  showDelete: PropTypes.bool,
  deleteTextColor: PropTypes.string,
  deleteBgColor: PropTypes.string,
  deleteClick: PropTypes.func,
};

export const BodyDeleteButtonDefaultProps = {
  showDelete: false,
  deleteTextColor: '',
  deleteBgColor: '',
  deleteClick: (value) => {
    console.log('this is a delete click', value);
  },
};

export const BodyCustomComponentPropTypes = {
  showCustom: PropTypes.bool,
  customComponent: PropTypes.func,
};

export const BodyCustomComponentDefaultProps = {
  showCustom: false,
  customComponent: () => {
    console.log('this is a custom component');
  },
};
export const BodyPropTypes = {
  ...tablePropTypes,
  ...BodyColorPropTypes,
  ...BodyEditButtonPropTypes,
  ...BodyDeleteButtonPropTypes,
  ...BodyCustomComponentPropTypes,
  loading: PropTypes.bool,
};

export const BodyDefaultProps = {
  ...tableDefaultProps,
  ...BodyColorDefaultProps,
  ...BodyEditButtonDefaultProps,
  ...BodyDeleteButtonDefaultProps,
  ...BodyCustomComponentDefaultProps,
  loading: false,
};
