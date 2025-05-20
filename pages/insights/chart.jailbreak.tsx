import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement } from "chart.js";
import { Scatter } from "react-chartjs-2";
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  const DATA_COUNT = 7;
const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

const options = {
  scales: {
    x: {
      type: "linear",
      position: "bottom",
      title: {
        display: true,
        text: "Model Size (Billions of Parameters)",
      },
    },
    y: {
      title: {
        display: true,
        text: "Jailbreaking Success Rate (%)",
      },
    },
  },
  plugins: {
    legend: {
    //   position: "right",
    },
  },
};

const data = {
  datasets: [
    {
      label: "falcon",
      data: [
        { x: 10, y: 0.65 },
        { x: 70, y: 0.85 },
      ],
      backgroundColor: "blue",
      pointStyle: "circle",
      pointRadius: 5,
    },
    {
      label: "llama-2",
      data: [
        { x: 15, y: 0.6 },
        { x: 65, y: 0.9 },
      ],
      backgroundColor: "green",
      pointStyle: "rect",
      pointRadius: 5,
    },
    {
      label: "vicuna",
      data: [
        { x: 20, y: 0.7 },
        { x: 60, y: 0.75 },
      ],
      backgroundColor: "red",
      pointStyle: "triangle",
      pointRadius: 5,
    },
    {
      label: "llama",
      data: [{ x: 30, y: 0.8 }],
      backgroundColor: "purple",
      pointStyle: "rectRot",
      pointRadius: 5,
    },
  ],
};

const ChartJailbreak = () => {
  return (
    <div style={{ position: "relative", height: "400px", width: "100%" }}>
      <Scatter data={data} />;
    </div>
  );
};
export default ChartJailbreak;
