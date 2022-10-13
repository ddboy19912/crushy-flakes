import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/plots';

const SliderColumn = () => {
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     asyncFetch();
  //   }, []);

  //   const asyncFetch = () => {
  //     fetch(
  //       'https://gw.alipayobjects.com/os/bmw-prod/be63e0a2-d2be-4c45-97fd-c00f752a66d4.json'
  //     )
  //       .then((response) => response.json())
  //       .then((json) => setData(json))
  //       .catch((error) => {
  //         console.log('fetch data failed', error);
  //       });
  //   };
  const data = [
    { date: 1999, value: 2577.9 },
    { date: 2000, value: 2671.9 },
    { date: 2001, value: 2759.7 },
    { date: 2002, value: 2901.2 },
    { date: 2003, value: 3145.5 },
    { date: 2004, value: 3445.8 },
    { date: 2005, value: 3724.3 },
    { date: 2006, value: 3944 },
    { date: 2007, value: 4195.2 },
    { date: 2008, value: 4310.8 },
    { date: 2009, value: 4411.1 },
    { date: 2010, value: 4696.1 },
    { date: 2011, value: 4951.1 },
    { date: 2012, value: 5118.2 },
    { date: 2013, value: 5269.9 },
    { date: 2014, value: 5382.9 },
    { date: 2015, value: 5472.4 },
    { date: 2016, value: 5585.5 },
    { date: 2017, value: 5743.6 },
  ];
  const config = {
    data,
    xField: 'date',
    yField: 'value',
    width: 500,
    height: 250,
    xAxis: {
      label: {
        autoRotate: false,
      },
    },
    slider: {
      start: 0.1,
      end: 0.2,
    },
  };

  return <Column {...config} />;
};

export default SliderColumn;
