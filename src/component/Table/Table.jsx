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
import PaginationCustom from './PaginationCustom';

const getCurrentPageData = (data, currentPage, pageSize) => {
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const raw = data.slice(startIndex, endIndex);
  return raw;
};
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
  showPagination,
  pageSize,
}) {
  const [sortColumn, setSortColumn] = useState({ key: '', direction: 'none' }); // 點擊th的儲存
  const [currentPage, setCurrentPage] = useState(1); // 當前頁碼
  const pageSizeRef = useRef(pageSize); // 每頁出現幾筆資料

  const originDataRef = useRef(data);
  const actionColumn = useRef(showEdit || showDelete || showCustom);
  // columns的所有欄位key
  const columnKeys = useMemo(() => map(columns, (c) => c.key), [columns]);

  // 設定預設的排序欄位
  useEffect(() => {
    if (orderColumn !== '')
      setSortColumn({ key: orderColumn, direction: 'asc' });
  }, [orderColumn]);

  useEffect(() => {
    if (data.length > 0) originDataRef.current = data;
  }, [data]);
  const sortedData = useMemo(() => {
    if (sortColumn.direction === 'none') return originDataRef.current;
    return orderBy(
      originDataRef.current,
      [sortColumn.key],
      [sortColumn.direction]
    );
  }, [sortColumn.direction, sortColumn.key]);

  return (
    <Table id="TableCustom" captionSide="bottom">
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
        data={
          !showPagination
            ? sortedData
            : getCurrentPageData(sortedData, currentPage, pageSizeRef.current)
        }
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
      {showPagination && (
        <PaginationCustom
          data={sortedData}
          setPage={setCurrentPage}
          currentPage={currentPage}
          pageSize={pageSizeRef.current}
          colspan={columnKeys.length + (actionColumn && 1)}
        />
      )}
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
  showPagination: PropTypes.bool,
  pageSize: PropTypes.number,
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
  showPagination: false,
  pageSize: 5,
};

export default TableCustom;
