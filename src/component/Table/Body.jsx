// 表身 利用columns的key找到tableDataList的相對應key值資料
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { isNumber, map } from 'lodash';
import { Skeleton } from '@mantine/core';

import Currency from '../../util/currency';
import Action from './Action';
import { BodyDefaultProps, BodyPropTypes } from './propType/BodyPropsType';

function Body({
  columns,
  data,
  striped,
  tbodyOddBackgroundColor,
  tbodyOddTextColor,
  tbodyEvenBackgroundColor,
  tbodyEvenTextColor,
  currency,
  children,
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
  const handleClickTd = (item) => {
    console.log('item', item);
  };

  if (loading) {
    return (
      <tbody>
        <tr>
          {map(columns, (td) => (
            <td
              aria-label={`skeleton-${td}`}
              key={`tableBodyCol-${td}-Skeleton`}
            >
              <Skeleton width="100%" height={25} />
            </td>
          ))}
        </tr>
      </tbody>
    );
  }
  return (
    <tbody id="tableBody">
      {map(data, (tr, index) => (
        <tr
          key={`tableBodyCol-${index}`}
          onClick={() => handleClickTd(tr)}
          style={{
            backgroundColor:
              striped &&
              (index % 2 === 0
                ? tbodyOddBackgroundColor
                : tbodyEvenBackgroundColor),
            color:
              striped &&
              (index % 2 === 0 ? tbodyOddTextColor : tbodyEvenTextColor),
          }}
        >
          {map(columns, (thKey) => {
            const columnValue =
              currency && isNumber(tr[thKey]) ? Currency(tr[thKey]) : tr[thKey];
            return (
              <td key={`tableBodyCol-${index}-${thKey}`}>{columnValue}</td>
            );
          })}
          <Action
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
            trValue={tr}
          />
        </tr>
      ))}
      {children}
    </tbody>
  );
}

Body.propTypes = BodyPropTypes;

Body.defaultProps = BodyDefaultProps;

export default Body;
