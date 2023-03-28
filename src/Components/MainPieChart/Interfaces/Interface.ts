export interface ChartData {
  labels: string[];
  datasets: ChartDataSet[];
}

export interface ChartDataSet {
  data: number[];
  backgroundColor: string[];
  hoverBackgroundColor: string[];
}
