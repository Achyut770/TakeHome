import React, { useEffect, useState } from "react";
import { Data } from "../../PieData";
import "./styles/PieChartInNumber.css";

interface PieCount {
  Name: string;
  Number: number;
}

const PieChartinNumber = () => {
  const [pieData, setPieData] = useState<PieCount[]>([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let _pieData: PieCount[] = [];
    let total = 0;
    for (let index = 0; index < Data.length; index++) {
      let PieObj: PieCount = {
        Name: "",
        Number: 0,
      };
      total += Data[index].datasets[0].data[0];
      PieObj.Name = Data[index].labels[0];
      PieObj.Number = Data[index].datasets[0].data[0];
      _pieData.push(PieObj);
    }
    setTotal(total);
    setPieData(_pieData);
  }, []);

  return (
    <>
      <div className="pieChartInNumber">
        {pieData.map((items, index) => {
          return (
            <div className="pieChartInNumberIndv">
              <span className="nameOfPieData">{items.Name}</span>
              <span>{items.Number}</span>
            </div>
          );
        })}
      </div>
      <div className="pieChartInNumberIndv">
        <span>Total</span>
        <span className="nameOfPieData">{total}</span>
      </div>
    </>
  );
};

export default PieChartinNumber;
