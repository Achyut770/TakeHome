import React from "react";
import MainDashboardTops from "../Components/SearchForm/SearchForm";
import PieCharts from "../Components/MainPieChart/PieCharts";
import PieChartinNumber from "../Components/PieChartInNumber/PieChartinNumber";

const ManiDahboard = () => {
  return (
    <>
      <MainDashboardTops fromTicket={false} />
      <PieCharts />
      <PieChartinNumber />
    </>
  );
};

export default ManiDahboard;
