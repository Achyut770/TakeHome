import React, { useEffect, useState } from "react";
import { Data } from "../../PieData";

interface PieCount {
  [fruit: string]: number;
}

const PieChartinNumber = () => {
  const [pieData, setPieData] = useState();

  useEffect(() => {
    let _pieData: PieCount[] = [];
    for (let index = 0; index < Data.length; index++) {
      let PieObj: PieCount = {};
      PieObj[Data[index].labels[0]] = Data[index].datasets[0].data[0];
      _pieData.push(PieObj);
    }
    console.log(_pieData);
  }, []);

  return <></>;
};

export default PieChartinNumber;
