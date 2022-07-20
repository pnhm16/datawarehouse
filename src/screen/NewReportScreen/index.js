import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import CustomHeaderStack from "../../components/CustomHeader";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function NewReportScreen(props) {
  return (
    <ScrollView style={styles.container}>
      <View style={{ height: 50 }}>
        <CustomHeaderStack {...props} />
      </View>
      <View style={styles.body}>
        <View style={styles.title}>
          <Text style={styles.textTitle}>Create a new report</Text>
        </View>
        <TouchableOpacity style={styles.layoutCreateReport} onPress={() => {}}>
          <View style={styles.imageCreateReport}>
            <Image
              style={styles.imageItem1}
              source={require("../../asset/images/icon_add_data.png")}
            />
          </View>
          <Text style={styles.textCreateReport}>
            Paste or manually enter data
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.layoutCreateReport} onPress={() => {}}>
          <View style={styles.imageCreateReport}>
            <Image
              style={styles.imageItem}
              source={require("../../asset/images/icon_table_data.png")}
            />
          </View>
          <Text style={styles.textCreateReport}>Pick a published dataset</Text>
        </TouchableOpacity>
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
  imageItem: {
    height: 70,
    width: 74,
    marginRight: 10,
  },
  layoutCreateReport: {
    backgroundColor: "#6574C4",
    width: "94%",
    borderRadius: 10,
    height: 180,
    alignSelf: "center",
    marginTop: 10,
  },
  imageCreateReport: {
    height: 125,
    alignSelf: "center",
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 20,
  },
  textCreateReport: {
    fontSize: 16,
    alignSelf: "center",
    color: "#fff",
  },
});
