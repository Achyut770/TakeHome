import React from "react";
import MainDashboardTops from "../Components/MainDashBoard/SearchForm";
import MyComponent from "../Components/MainPieChart/PieCharts";
import PieChartinNumber from "../Components/PieChartInNumber/PieChartinNumber";

const ManiDahboard = () => {
  return (
    <>
      <MainDashboardTops fromTicket={false} />
      <MyComponent />
      <PieChartinNumber />
    </>
  );
};

export default ManiDahboard;
