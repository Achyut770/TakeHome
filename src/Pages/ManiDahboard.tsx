import React from "react";
import MainDashboardTops from "../Components/MainDashBoard/MainDashboardTops";
import MyComponent from "../Components/MainPieChart/PieCharts";
import PieChartinNumber from "../Components/PieChartInNumber/PieChartinNumber";

const ManiDahboard = () => {
  return (
    <>
      <MainDashboardTops />
      <MyComponent />
      <PieChartinNumber />
    </>
  );
};

export default ManiDahboard;
