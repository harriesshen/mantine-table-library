import React from 'react';
import { Table } from '../component';
import generateRandomData from '../util/generateRandomData';

export default {
  title: 'Example/Table',
  component: Table,
  tags: ['autodocs'],
};

export const Basic = {
  args: {
    columns: [
      { key: 'name', title: 'name' },
      { key: 'age', title: 'age' },
      { key: 'sex', title: 'sex' },
      { key: 'money', title: 'money' },
    ],
    data: [
      {
        name: 'harries',
        age: '24',
        sex: 'M',
        money: 300000,
      },
      {
        name: 'erica',
        age: '19',
        sex: 'W',
        money: 100000,
      },
    ],
  },
};

export const setTableColor = {
  args: {
    columns: Basic.args.columns,
    data: [
      {
        name: 'harries',
        age: 24,
        sex: 'M',
        money: 300000,
      },
      {
        name: 'erica',
        age: 19,
        sex: 'W',
        money: 100000,
      },
      {
        name: 'Tom',
        age: 24,
        sex: 'M',
        money: 25000000,
      },
      {
        name: 'sunny',
        age: 32,
        sex: 'W',
        money: 5000000,
      },
    ],
    currency: true,
    striped: true,
    theadBackgroundColor: '#d5d2cb',
    theadTextColor: '#000',
    tbodyOddBackgroundColor: '#a81b1b',
    tbodyOddTextColor: '#fff',
    tbodyEvenBackgroundColor: '#0e0c52',
    tbodyEvenTextColor: '#f30d0d',
  },
};

export const showTotal = {
  args: {
    ...Basic.args,
    showTotal: true,
    currency: true,
  },
};

export const orderTable = {
  args: {
    columns: Basic.args.columns,
    data: generateRandomData(10),
    showTotal: true,
    currency: true,
    order: true,
    orderColumn: 'money',
  },
};

export const actionTable = {
  args: {
    ...orderTable.args,
    showEdit: true,
    showDelete: true,
    theadBackgroundColor: '#e1e1e1',
    tbodyOddBackgroundColor: '#ffffff',
    striped: true,
    tbodyEvenBackgroundColor: '#e6e0e0',
    editBgColor: '#c18989',
  },
};

export const loadingTable = {
  args: {
    ...Basic.args,
    loading: true,
  },
};

export const paginationTable = {
  args: {
    columns: Basic.args.columns,
    data: generateRandomData(20),
  },
};
