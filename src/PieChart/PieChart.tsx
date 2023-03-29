import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import { PieChartProps } from "./interface/interface";
Chart.register(ArcElement);

function PieChart({ data, width = 100, height = 100 }: PieChartProps) {
  return <Doughnut data={data} width={width} height={height} />;
}

export default PieChart;
