import React from "react";
import PieChart from "../../PieChart/PieChart";
import { ChartData } from "./Interfaces/Interface";

interface Props {
  items: ChartData;
}

const IndvPieChart = ({ items }: Props) => {
  return (
    <>
      <div className="pieChartData">
        {items.labels.map((val, index) => {
          return (
            <div>
              <div>{val}</div>
              <div
                style={{
                  background: items.datasets[0].backgroundColor[index],
                }}
                className="PieChartBox"></div>
            </div>
          );
        })}
      </div>
      <PieChart data={items} width={200} height={200} />;
    </>
  );
};

export default IndvPieChart;
