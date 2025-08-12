import { Chart as ChartJS, PointElement, RadialLinearScale, Tooltip, LineElement, Legend } from "chart.js";
import { Radar } from "react-chartjs-2";
ChartJS.register(PointElement, RadialLinearScale, LineElement, Tooltip, Legend);

const DATA_COUNT = 7;
const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};


const PrivacyChart = () => {
  return (
    <div style={{ position: "relative", height:"400px", width:"100%" }}>
      <Radar
        data={{
          labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Novemeber", "December"],
          datasets: [
            {
                label: 'Dataset 1',
                data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 90, 80],
                borderColor: "red",
                backgroundColor: "#ff0000",
              },
              {
                label: 'Dataset 2',
                data: [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 2, 4],
                borderColor: "blue",
                backgroundColor: "#0000ff",
              }
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
            title: {
                display: true,
                text: "Radar Chart Demo"
            }
          },
        }}
      />
    </div>
  );
};
export default PrivacyChart;
