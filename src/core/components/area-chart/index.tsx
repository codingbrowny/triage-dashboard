import * as React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { ChartLabels } from "../../utils/data";
import { ChartOptions } from "../../utils/chart-options";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

/**CHart Options */
const customOptions = {
  datasets: {
    ...ChartOptions.datasets,
    line: {
      fill:true,
    },
  },
  plugins: {
    ...ChartOptions.plugins, 
    title: {
      ...ChartOptions.plugins.title,
      text: "Total Revenue"
    }
  }
}
const options = {...ChartOptions, ... customOptions}

const data = {
  labels: ChartLabels,
  datasets: [
    {
      label: "This Month",
      data: [43, 89, 86, 105, 75, 113, 98, 45, 69, 120, 101, 82],
      backgroundColor: "rgba(240, 165, 0, 0.05)",
      borderColor: "rgba(0, 0, 0, 0.5)",
    },
  ],
};

const AreaChart = () => {
  return <Line data={data} options={options} />;
};

export default AreaChart;
