import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import CustomHeaderStack from "../../components/CustomHeader";
import AntDesign from "react-native-vector-icons/AntDesign";
import BarChart from "./BarChartKit";
import PieChart from "./PieChartKit";
import LineChart from "./LineChartKit";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function ItemReportScreen(props) {
  const [statusChart, setStatusChart] = useState("Bar");
  console.log(statusChart);
  return (
    <ScrollView style={styles.container}>
      <View style={{ height: 50 }}>
        <CustomHeaderStack onPress={() => {}} {...props} />
      </View>
      <View style={styles.body}>
        <View style={styles.title}>
          <Text style={styles.textTitle}>{props.route.params.nameReport}</Text>
        </View>
        <View style={styles.layoutIcon}>
          <View style={styles.groupIcon}>
            <TouchableOpacity
              style={styles.backgroundIconLeft}
              onPress={() => {
                setStatusChart("Bar");
              }}
            >
              <AntDesign name="barschart" size={25} color={"#673ab7"} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.backgroundIconLeft}
              onPress={() => {
                setStatusChart("Pie");
              }}
            >
              <AntDesign name="piechart" size={25} color={"#673ab7"} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.backgroundIconLeft}
              onPress={() => {
                setStatusChart("Line");
              }}
            >
              <AntDesign name="linechart" size={25} color={"#673ab7"} />
            </TouchableOpacity>
            <View style={styles.backgroundIconLeft}>
              <AntDesign name="dotchart" size={25} color={"#673ab7"} />
            </View>
          </View>
          <View style={styles.groupIcon}>
            <TouchableOpacity
              style={styles.backgroundIconRight}
              onPress={() =>
                props.navigation.push("Filter", { nameReport: "Iris" })
              }
            >
              <AntDesign name="filter" size={25} color={"#673ab7"} />
            </TouchableOpacity>
            <View style={styles.backgroundIconRight}>
              <AntDesign name="sharealt" size={25} color={"#673ab7"} />
            </View>
          </View>
        </View>
        {statusChart == "Bar" ? (
          <View>
            <ScrollView style={styles.chartLayout} horizontal={true}>
              <BarChart />
            </ScrollView>
            <ScrollView style={styles.chartLayout} horizontal={true}>
              <BarChart />
            </ScrollView>
          </View>
        ) : null}
        {statusChart == "Pie" ? (
          <View>
            <ScrollView style={styles.chartLayout} horizontal={true}>
              <PieChart />
            </ScrollView>
          </View>
        ) : null}
        {statusChart == "Line" ? (
          <View>
            <ScrollView style={styles.chartLayout} horizontal={true}>
              <LineChart />
            </ScrollView>
          </View>
        ) : null}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  body: {
    flex: 1,
    margin: 10,
    borderRadius: 20,
    height: windowHeight,
    backgroundColor: "#E3F2FD",
  },
  title: {
    flexDirection: "row",
    backgroundColor: "#fff",
    margin: 10,
    height: 40,
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
  },
  textTitle: {
    fontSize: 16,
  },
  layoutIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  groupIcon: {
    flexDirection: "row",
    marginRight: 10,
    marginLeft: 10,
  },
  chartLayout: {
    backgroundColor: "#fff",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
  },
  backgroundIconLeft: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 40,
    borderRadius: 10,
    marginRight: 10,
  },
  backgroundIconRight: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 40,
    borderRadius: 10,
    marginLeft: 10,
  },
});
