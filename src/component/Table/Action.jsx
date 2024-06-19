// 操作
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Button } from '@mantine/core';

import PropTypes from 'prop-types';
import {
  BodyCustomComponentDefaultProps,
  BodyCustomComponentPropTypes,
  BodyDeleteButtonDefaultProps,
  BodyDeleteButtonPropTypes,
  BodyEditButtonDefaultProps,
  BodyEditButtonPropTypes,
} from './propType/BodyPropsType';

function Action({
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
  trValue,
}) {
  return (
    (showEdit || showDelete || showCustom) && (
      <td className="tableAction">
        {showEdit && (
          <Button
            styles={(theme) => ({
              root: {
                backgroundColor: editBgColor !== '' && editBgColor,
                color: editTextColor !== '' && editTextColor,
                '&:hover': {
                  backgroundColor:
                    editBgColor !== '' && theme.fn.darken(editBgColor, 0.05),
                },
              },
            })}
            onClick={() => editClick(trValue)}
          >
            編輯
          </Button>
        )}
        {showDelete && (
          <Button
            styles={(theme) => ({
              root: {
                backgroundColor: deleteBgColor !== '' && deleteBgColor,
                color: deleteTextColor !== '' && deleteTextColor,
                '&:hover': {
                  backgroundColor:
                    deleteBgColor !== '' &&
                    theme.fn.darken(deleteBgColor, 0.05),
                },
              },
            })}
            onClick={() => deleteClick(trValue)}
          >
            刪除
          </Button>
        )}
        {showCustom && customComponent(trValue)}
      </td>
    )
  );
}

Action.propTypes = {
  ...BodyEditButtonPropTypes,
  ...BodyDeleteButtonPropTypes,
  ...BodyCustomComponentPropTypes,
  trValue: PropTypes.object,
};

Action.defaultProps = {
  ...BodyEditButtonDefaultProps,
  ...BodyDeleteButtonDefaultProps,
  ...BodyCustomComponentDefaultProps,
  trValue: {},
};

export default Action;
