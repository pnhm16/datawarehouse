import { BarChart } from "react-native-chart-kit";

import { View, Text, Dimensions } from "react-native";
import React from "react";

const data = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      data: [
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
      ],
    },
  ],
};

const graphStyle = {
  marginVertical: 8,
  borderRadius: 10,
};

const screenWidth = Dimensions.get("window").width * 2.3;

const chartConfig = {
  backgroundColor: "#E3F2FD",
  backgroundGradientFrom: "#fff",
  backgroundGradientTo: "#fff",
  color: (opacity = 1) => `rgba(101, 116, 196, ${opacity})`,
  style: {
    borderRadius: 10,
  },
};

export default function BarChartKit() {
  return (
    <BarChart
      style={graphStyle}
      data={data}
      width={screenWidth}
      height={250}
      yAxisLabel="$"
      chartConfig={chartConfig}
      verticalLabelRotation={0}
    />
  );
}
