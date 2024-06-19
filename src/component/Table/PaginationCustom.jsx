// 表尾

// eslint-disable-next-line no-unused-vars
import React, { useMemo, useState } from 'react';
import { Flex, Pagination } from '@mantine/core';
import {
  PaginationDefaultTypes,
  PaginationPropTypes,
} from './propType/PaginationPropsType';

function PaginationCustom({ data, setPage, currentPage, pageSize, colspan }) {
  const totalPage = useMemo(
    () => Math.ceil(data.length / pageSize),
    [data.length, pageSize]
  );
  return (
    <tfoot>
      <tr>
        <td colSpan={colspan} aria-label="pagination">
          <Flex justify="center">
            <Pagination
              total={totalPage}
              onChange={setPage}
              value={currentPage}
            />
          </Flex>
        </td>
      </tr>
    </tfoot>
  );
}

PaginationCustom.propTypes = PaginationPropTypes;

PaginationCustom.defaultProps = PaginationDefaultTypes;

export default PaginationCustom;
