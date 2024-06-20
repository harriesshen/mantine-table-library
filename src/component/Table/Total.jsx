// 表尾總和

// eslint-disable-next-line no-unused-vars
import React, { useMemo } from 'react';
import { isNumber, map } from 'lodash';
import PropTypes from 'prop-types';
import Currency from '../../util/currency';
import { tableDefaultProps, tablePropTypes } from './propType/TablePropsType';

function Total({ columns, data, currency, actionColumn }) {
  const totalList = useMemo(
    () =>
      columns.reduce((acc, key) => {
        acc[key] = data.reduce(
          (sum, row) => {
            if (isNumber(row[key])) return sum + row[key];
            return '';
          },
          isNumber(data[0][key]) ? 0 : ''
        );
        return acc;
      }, {}),
    [columns, data]
  );
  return (
    <tr>
      {map(columns, (col) => (
        <td key={`total-${col}`}>
          {currency ? Currency(totalList[col]) : totalList[col]}
        </td>
      ))}
      {actionColumn && <td aria-label="action" />}
    </tr>
  );
}

Total.propTypes = {
  ...tablePropTypes,
  currency: PropTypes.bool,
  actionColumn: PropTypes.bool,
};

Total.defaultProps = {
  ...tableDefaultProps,
  currency: false,
  actionColumn: false,
};

export default Total;
