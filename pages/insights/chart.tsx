import { Chart as ChartJS, CategoryScale, LinearScale, Tooltip, PointElement, LineElement, Legend } from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const MyLineChart = () => {
  return (
    <div style={{ position: "relative", height:"400px", width:"100%" }}>
      <Line
        data={{
          labels: ["2023-01", "2023-04", "2023-07", "2023-10", "2024-01", "2024-04", "2024-07", "2024-10"],
          datasets: [
            {
              label: "My First Dataset",
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
            {
              label: "The second Dataset",
              data: [52, 62, 91, 94, 9, 76, 31],
              fill: false,
              borderColor: "#ed6d85",
              tension: 0.1,
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          aspectRatio: 2,
          responsive: true,
          interaction: {
            mode: "index",
          },
          plugins: {
            legend: {
              display: true,
            },
          },
        }}
      />
    </div>
  );
};
export default MyLineChart;
