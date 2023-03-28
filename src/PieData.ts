import { ChartData } from "./Components/MainPieChart/Interfaces/Interface";

export let Data: ChartData[] = [
  {
    labels: ["Apples", "Oranges", "PineApple"],
    datasets: [
      {
        data: [30, 20, 50],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  },
  {
    labels: ["Apples", "Oranges", "Bananas"],
    datasets: [
      {
        data: [30, 20, 50],
        backgroundColor: ["#FF6384", "#000000", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  },
  {
    labels: ["Apples", "Oranges", "Bananas"],
    datasets: [
      {
        data: [30, 20, 50],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  },
];
