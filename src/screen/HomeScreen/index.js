import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  ScrollView,
} from "react-native";
import React from "react";
import CustomHeaderStack from "../../components/CustomHeader";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const data = [
  {
    id: 1,
    nameReport: "Iris",
  },
  {
    id: 2,
    nameReport: "User",
  },
  {
    id: 3,
    nameReport: "Product",
  },
];

const dataset = [
  {
    id: 1,
    nameData: "Data_Iris",
  },
  {
    id: 2,
    nameData: "Data_User",
  },
  {
    id: 3,
    nameData: "Data_Product",
  },
];

export default function HomeScreen(props) {
  return (
    <ScrollView style={styles.container}>
      <View style={{ height: 65 }}>
        <CustomHeaderStack {...props} />
      </View>
      <View style={styles.body}>
        <TouchableOpacity onPress={() => props.navigation.push("NewReport")}>
          <View style={styles.buttonCreate}>
            <Feather name="plus" size={20} color="#000" />
            <Text>New Report</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.title}>
          <AntDesign name="clockcircleo" size={22} color={"#673ab7"} />
          <Text style={styles.textTitle}>Recent</Text>
        </View>
        <ScrollView style={styles.layoutRecent} horizontal={true}>
          {data.map((item) => {
            return (
              <TouchableOpacity
                key={item.id}
                style={styles.itemReport}
                onPress={() =>
                  props.navigation.navigate("ItemReport", {
                    nameReport: item.nameReport,
                  })
                }
              >
                <Image
                  style={styles.image}
                  source={require("../../asset/images/icon_report.png")}
                />
                <Text style={styles.nameReport}>{item.nameReport}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        <View style={styles.layoutFavories}>
          <View style={styles.title}>
            <FontAwesome name="heart" size={20} color={"#673ab7"} />
            <Text style={styles.textTitle}>Favorites</Text>
          </View>
          {data.map((item) => {
            return (
              <TouchableOpacity
                key={item.id}
                style={styles.itemFavories}
                onPress={() =>
                  props.navigation.navigate("ItemReport", {
                    nameReport: item.nameReport,
                  })
                }
              >
                <View style={styles.itemHeadFavories}>
                  <Image
                    style={styles.imageItem}
                    source={require("../../asset/images/icon_report_square.png")}
                  />
                  <Text style={styles.nameReport}>{item.nameReport}</Text>
                </View>
                <Feather name="chevron-right" size={25} color={"#000000"} />
              </TouchableOpacity>
            );
          })}
          {dataset.map((item) => {
            return (
              <TouchableOpacity style={styles.itemFavories} key={item.id}>
                <View style={styles.itemHeadFavories}>
                  <Image
                    style={styles.imageItem}
                    source={require("../../asset/images/icon_data_square.png")}
                  />
                  <Text style={styles.nameReport}>{item.nameData}</Text>
                </View>
                <Feather name="chevron-right" size={25} color={"#000000"} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    margin: 20,
  },
  title: {
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 10,
  },
  textTitle: {
    marginRight: 10,
    marginLeft: 10,
    fontSize: 16,
  },
  nameReport: {
    marginTop: 5,
    fontSize: 16,
  },
  itemReport: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: 100,
    borderRadius: 10,
    borderColor: "#673ab7",
    borderWidth: 1,
    marginRight: 10,
  },
  itemFavories: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 10,
  },
  itemHeadFavories: {
    flexDirection: "row",
    alignItems: "center",
  },
  layoutRecent: {
    flexDirection: "row",
    marginTop: 20,
  },
  layoutFavories: {
    marginTop: 12,
    borderRadius: 10,
    borderColor: "#673ab7",
    borderWidth: 1,
    minHeight: 300,
  },
  buttonCreate: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
    padding: 10,
    width: 130,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#000",
    backgroundColor: "#F2C810",
  },
  image: {
    height: 50,
    width: 50,
  },
  imageItem: {
    height: 25,
    width: 25,
    marginRight: 10,
  },
});
