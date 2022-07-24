import { View, Text, Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";
import React from "react";
import { useSelector } from "react-redux";

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
  const reportData = useSelector((state) => state.reportsReducer.reportData);
  const pieChartData = [
    {
      name: "One Star",
      population: reportData?.data[0].countStarOne,
      color: "#cd762f",
      legendFontColor: "#7F7F7F",
      legendFontSize: 12,
    },
    {
      name: "Two Star",
      population: reportData?.data[0].countStarTwo,
      color: "#e7c593",
      legendFontColor: "#7F7F7F",
      legendFontSize: 12,
    },
    {
      name: "Three Star",
      population: reportData?.data[0].countStarThree,
      color: "#692c14",
      legendFontColor: "#7F7F7F",
      legendFontSize: 12,
    },
    {
      name: "Four Star",
      population: reportData?.data[0].countStarFour,
      color: "#a39964",
      legendFontColor: "#7F7F7F",
      legendFontSize: 12,
    },
    {
      name: "Fine Star",
      population: reportData?.data[0].countStarFine,
      color: "#c0ad81",
      legendFontColor: "#7F7F7F",
      legendFontSize: 12,
    },
  ];
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
