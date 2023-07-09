import React from "react";
import { Bar } from "react-chartjs-2";

const Graph = ({ dataset }) => {
  // Extraer los datos relevantes del objeto JSON
  const tags = dataset.body.discoverList
    .filter((item) => item.type === 3)
    .map((item) => item.title);
  const music = dataset.body.discoverList
    .filter((item) => item.type === 4)
    .map((item) => item.title);

  // Crear la configuración del gráfico
  const chartData = {
    labels: ["Tags", "Música"],
    datasets: [
      {
        label: "Frecuencia",
        data: [tags.length, music.length],
        backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(75, 192, 192, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Comparativa de Tags y Música</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default Graph;
