import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

interface ChartData {
  labels: string[];
  datasets: {
    data: number[];
    backgroundColor: string[];
    hoverBackgroundColor: string[];
  }[];
}

interface PieChartProps {
  data: ChartData;
  width?: number;
  height?: number;
}

function PieChart({ data, width = 100, height = 100 }: PieChartProps) {
  const [chartData, setChartData] = useState(data);

  return <Doughnut data={chartData} width={width} height={height} />;
}

export default PieChart;
