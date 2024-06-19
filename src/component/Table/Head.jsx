// 表頭
// eslint-disable-next-line no-unused-vars
import React, { useCallback, useRef } from 'react';
import { map } from 'lodash';
import {
  faArrowDownShortWide,
  faArrowDownWideShort,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { HeadPropTypes, HeadDefaultProps } from './propType/HeadPropsType';

const switchDirection = (direction) => {
  if (direction === 'asc') return 'desc';
  if (direction === 'desc') return 'none';
  return 'asc';
};

const getIcon = (direction) => {
  if (direction === 'asc')
    return <Icon icon={faArrowDownShortWide} style={{ marginLeft: '5px' }} />;
  if (direction === 'desc')
    return <Icon icon={faArrowDownWideShort} style={{ marginLeft: '5px' }} />;
  return '';
};

function Head({
  columns,
  theadBackgroundColor,
  theadTextColor,
  setSortColumn,
  sortColumn,
  order,
  actionColumn,
}) {
  const setSortColumnRef = useRef(setSortColumn);
  const handleClickTh = useCallback((value) => {
    setSortColumnRef.current((prev) => ({
      ...prev,
      key: value,
      direction: prev.key === value ? switchDirection(prev.direction) : 'asc',
    }));
  }, []);
  const columnLength = columns.length + (actionColumn && 1);
  return (
    <thead
      id="tableHead"
      style={{
        backgroundColor: theadBackgroundColor,
      }}
    >
      <tr>
        {map(columns, (th) => (
          <th
            key={th.key}
            style={{
              color: theadTextColor,
              width: `${(100 / columnLength).toFixed(1)}%`,
            }}
            onClick={order ? () => handleClickTh(th.key) : null}
            className={`${order && 'cursor'}`}
          >
            {th.title}
            {order &&
              th.key === sortColumn.key &&
              getIcon(sortColumn.direction)}
          </th>
        ))}
        {actionColumn && (
          <th
            style={{
              color: theadTextColor,
              width: `${(100 / columnLength).toFixed(1)}%`,
            }}
          >
            操作
          </th>
        )}
      </tr>
    </thead>
  );
}

Head.propTypes = HeadPropTypes;

Head.defaultProps = HeadDefaultProps;

export default Head;
