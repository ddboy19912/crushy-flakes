import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/plots';

const PieChart = ({ title }) => {
  const data = [
    {
      type: 'New Users',
      value: 35000,
    },
    {
      type: 'Active Users',
      value: 25000,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.9,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-30%',
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
    interactions: [
      {
        type: 'element-active',
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        content: `${title}`,
      },
    },
    color: ['#061031', '#F4BE37'],
  };
  return <Pie {...config} />;
};

export default PieChart;
