import { View, Text, Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";
import React from "react";

const pieChartData = [
  {
    name: "Seoul",
    population: 21500000,
    color: "#cd762f",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Toronto",
    population: 2800000,
    color: "#e7c593",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Beijing",
    population: 5276123,
    color: "#692c14",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "New York",
    population: 8538000,
    color: "#a39964",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Moscow",
    population: 11920000,
    color: "#c0ad81",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
];

const chartConfig = {
  backgroundColor: "#fff",
  backgroundGradientFrom: "#fff",
  backgroundGradientTo: "#fff",
  color: (opacity = 1) => `rgba(101, 116, 196, ${opacity})`,
  style: {
    borderRadius: 10,
  },
};

const graphStyle = {
  marginVertical: 8,
  borderRadius: 10,
};

const screenWidth = Dimensions.get("window").width;
export default function PieChartKit() {
  return (
    <PieChart
      data={pieChartData}
      height={200}
      width={screenWidth}
      chartConfig={chartConfig}
      accessor="population"
      backgroundColor={"transparent"}
      style={graphStyle}
    />
  );
}
