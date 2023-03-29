export interface ChartData {
  labels: string[];
  datasets: {
    data: number[];
    backgroundColor: string[];
    hoverBackgroundColor: string[];
  }[];
}

export interface PieChartProps {
  data: ChartData;
  width?: number;
  height?: number;
}
