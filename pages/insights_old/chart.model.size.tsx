import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
const DATA_COUNT = 7;
const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

const options = {
  plugins: {
    title: {
      display: true,
      text: "Data Extraction Accuracy on Enron",
    },
  },
  responsive: true,
  scales: {
    x: {
      display: true,
      title: {
        display: true,
      },
    },
    y: {
      display: true,
      title: {
        display: true,
        text: "Accuracy %",
      },
    },
  },
};

const labels = ["llama-2-70b-chat", "llama-2-13b-chat", "llama-2-7b-chat", "", "vicuna-13b-v1.5", "vicuna-7b-v1.5", "", "falcon-40b-instruct", "falcon-7b-instruct"];
const data = {
  labels,
  datasets: [
    {
      label: "Correct",
      data: [4.59, 3.72, 3.54, null, 4.02, 3.54, null, 3.99, 2.28],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Local",
      data: [13.68, 12.42, 12.24, null, 13.41, 11.49, null, 12.0, 9.06],
      backgroundColor: "rgba(54, 162, 235, 0.5)",
    },
    {
      label: "Domain",
      data: [14.25, 13.77, 12.75, null, 15.03, 14.82, null, 13.38, 11.07],
      backgroundColor: "rgba(75, 192, 192, 0.5)",
    },
    {
      label: "Average",
      data: [10.84, 9.97, 9.51, null, 10.82, 9.95, null, 9.79, 7.47],
      backgroundColor: "rgba(153, 102, 255, 0.5)",
    },
  ],
};

const ChartModelSize = () => {
  return (
    <div style={{ position: "relative", height: "400px", width: "100%" }}>
      <Bar options={options} data={data} />
    </div>
  );
};
export default ChartModelSize;
