import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import React from "react";
import { Avatar } from "react-native-paper";
import { DrawerActions } from "@react-navigation/native";
import { navigationRef, openDrawer } from "../helpers/RootNavigation";

export default function CustomHeader({ navigation, onPress }) {
  console.log(navigation);
  return (
    <View style={styles.container}>
      <View style={styles.layout}>
        <TouchableOpacity
          onPress={
            () =>
              // navigation.navigate("Root", {
              //   screen: "Workspaces",
              // })
              // navigation.toggleDrawer()
              // navigation.dispatch(DrawerActions.openDrawer())
              typeof onPress === "function" ? navigation.goBack() : openDrawer()
            // console.log(DrawerActions, navigation)
          }
        >
          <View style={styles.layoutIcon}>
            <Entypo name="menu" size={25} color="#673AB7" />
          </View>
        </TouchableOpacity>
        <View style={styles.layoutIcon}>
          <Feather name="search" size={25} color="#673AB7" />
        </View>
      </View>
      <View style={styles.layout}>
        <View style={styles.layoutIcon}>
          <Feather name="bell" size={25} color="#673AB7" />
        </View>
        <TouchableOpacity onPress={() => navigation.push("Profile")}>
          <Avatar.Image
            size={40}
            source={require("../asset/images/avatar.jpeg")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  layout: {
    flexDirection: "row",
  },
  layoutIcon: {
    padding: 7,
    backgroundColor: "#EDE7F6",
    borderRadius: 10,
    marginLeft: 5,
    marginRight: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    height: 40,
    width: 40,
  },
});
