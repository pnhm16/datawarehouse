import { LineChart } from "react-native-chart-kit";

import { View, Text, Dimensions } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

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

export default function LineChartKit() {
  const reportData = useSelector((state) => state.reportsReducer.reportData);
  const data = {
    labels: ["One Star", "Two Star", "Three Star", "Four Star", "Fine Star"],
    datasets: [
      {
        data: [
          reportData?.data[0].countStarOne,
          reportData?.data[0].countStarTwo,
          reportData?.data[0].countStarThree,
          reportData?.data[0].countStarFour,
          reportData?.data[0].countStarFine,
        ],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
      },
    ],
  };
  return (
    <LineChart
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
