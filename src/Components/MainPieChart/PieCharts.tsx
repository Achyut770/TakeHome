import { Data } from "../../PieData";
import IndvPieChart from "./IndvPieChart";
import { ChartData } from "./Interfaces/Interface";
import "./styles/PieCharts.css";

function PieCharts() {
  return (
    <div className="PieChart_Container">
      {Data.map((items: ChartData, index: number) => {
        return (
          <div key={index} className="IndvPieChart">
            {" "}
            <IndvPieChart items={items} />
          </div>
        );
      })}
    </div>
  );
}

export default PieCharts;
