// eslint-disable-next-line no-unused-vars
import React, { useEffect, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Table } from '@mantine/core';
import './Table.scss';
import { map, orderBy } from 'lodash';
import Head from './Head';
import Body from './Body';
import Total from './Total';
import { tableDefaultProps, tablePropTypes } from './propType/TablePropsType';
import {
  HeadColorDefaultProps,
  HeadColorPropTypes,
} from './propType/HeadPropsType';
import { OrderDefaultProps, OrderPropTypes } from './propType/OrderPropsType';
import {
  BodyColorDefaultProps,
  BodyColorPropTypes,
  BodyCustomComponentDefaultProps,
  BodyCustomComponentPropTypes,
  BodyDeleteButtonDefaultProps,
  BodyDeleteButtonPropTypes,
  BodyEditButtonDefaultProps,
  BodyEditButtonPropTypes,
} from './propType/BodyPropsType';

function TableCustom({
  columns,
  data,
  currency,
  striped,
  theadBackgroundColor,
  theadTextColor,
  tbodyOddBackgroundColor,
  tbodyOddTextColor,
  tbodyEvenBackgroundColor,
  tbodyEvenTextColor,
  showTotal,
  order,
  orderColumn,
  showEdit,
  editTextColor,
  editBgColor,
  editClick,
  showDelete,
  deleteTextColor,
  deleteBgColor,
  deleteClick,
  showCustom,
  customComponent,
  loading,
}) {
  const [sortColumn, setSortColumn] = useState({ key: '', direction: 'none' }); // 點擊th的儲存
  const originDataRef = useRef(data);
  const actionColumn = useRef(showEdit || showDelete || showCustom);
  // columns的所有欄位key
  const columnKeys = useMemo(() => map(columns, (c) => c.key), [columns]);

  // 設定預設的排序欄位
  useEffect(() => {
    if (orderColumn !== '')
      setSortColumn({ key: orderColumn, direction: 'asc' });
  }, [orderColumn]);

  const sortedData = useMemo(() => {
    if (sortColumn.direction === 'none') return originDataRef.current;
    return orderBy(
      originDataRef.current,
      [sortColumn.key],
      [sortColumn.direction]
    );
  }, [sortColumn.key, sortColumn.direction]);
  console.log('columns', columns);
  return (
    <Table id="TableCustom">
      <Head
        columns={columns}
        theadBackgroundColor={theadBackgroundColor}
        theadTextColor={theadTextColor}
        order={order}
        setSortColumn={setSortColumn}
        sortColumn={sortColumn}
        actionColumn={actionColumn.current}
      />

      <Body
        columns={columnKeys}
        data={sortedData}
        striped={striped}
        tbodyOddBackgroundColor={tbodyOddBackgroundColor}
        tbodyOddTextColor={tbodyOddTextColor}
        tbodyEvenBackgroundColor={tbodyEvenBackgroundColor}
        tbodyEvenTextColor={tbodyEvenTextColor}
        currency={currency}
        showEdit={showEdit}
        editTextColor={editTextColor}
        editBgColor={editBgColor}
        editClick={editClick}
        showDelete={showDelete}
        deleteTextColor={deleteTextColor}
        deleteBgColor={deleteBgColor}
        deleteClick={deleteClick}
        showCustom={showCustom}
        customComponent={customComponent}
        loading={loading}
      >
        {showTotal && (
          <Total
            columns={columnKeys}
            data={originDataRef.current}
            currency={currency}
          />
        )}
      </Body>
    </Table>
  );
}

TableCustom.propTypes = {
  ...tablePropTypes,
  ...HeadColorPropTypes,
  currency: PropTypes.bool,
  showTotal: PropTypes.bool,
  ...BodyColorPropTypes,
  ...OrderPropTypes,
  ...BodyEditButtonPropTypes,
  ...BodyDeleteButtonPropTypes,
  ...BodyCustomComponentPropTypes,
  loading: PropTypes.bool,
};

TableCustom.defaultProps = {
  ...tableDefaultProps,
  ...HeadColorDefaultProps,
  currency: false, // 千份位
  showTotal: false, // 顯示總計
  ...BodyColorDefaultProps,
  ...OrderDefaultProps,
  ...BodyEditButtonDefaultProps,
  ...BodyDeleteButtonDefaultProps,
  ...BodyCustomComponentDefaultProps,
  loading: false,
};

export default TableCustom;
