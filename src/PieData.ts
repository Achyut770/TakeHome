import { ChartData } from "./Components/MainPieChart/Interfaces/Interface";

export let Data: ChartData[] = [
  {
    labels: ["Apples", "Oranges", "PineApple"],
    datasets: [
      {
        data: [30, 20, 50],
        backgroundColor: ["red", "yellow", "green"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  },
  {
    labels: ["Football", "Cricket", "VolleyBall"],
    datasets: [
      {
        data: [100, 20, 50],
        backgroundColor: ["blue", "#000000", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  },
  {
    labels: ["Esewa", "Khalti", "Paypal"],
    datasets: [
      {
        data: [70, 20, 50],
        backgroundColor: ["green", "purple", "orange"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  },
];
