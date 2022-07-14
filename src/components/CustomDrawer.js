/* eslint-disable react/prop-types */
import React from "react";
import { View, StyleSheet, Text, Image, DevSettings } from "react-native";
import { useTheme } from "react-native-paper";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { useTranslation } from "react-i18next";
import { Avatar, Card, Divider } from "react-native-paper";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";

export const CustomDrawer = (props) => {
  const { colors } = useTheme();
  const { t } = useTranslation();

  // const onLogout = () =>{

  // }
  const dispatch = useDispatch();

  const LeftContent = (props) => (
    <Avatar.Image {...props} source={{ uri: props.userInfo?.data.avatar }} />
  );

  const filteredProps = {
    ...props,
    state: {
      ...props.state,
      routeNames: props.state.routeNames.filter(
        (routeName) => routeName !== "Main"
      ),
      routes: props.state.routes.filter((route) => route.name !== "Main"),
    },
  };

  return (
    <DrawerContentScrollView {...filteredProps}>
      {props.userInfo ? (
        <Card>
          <Card.Title
            title={props.userInfo?.data.firstName}
            subtitle={props.userInfo?.data.email}
            left={LeftContent}
          />
        </Card>
      ) : (
        <View style={{ ...styles.container }}>
          <View style={styles.box1}>
            <View style={styles.inner}>
              <Image
                style={styles.imageLogo}
                // eslint-disable-next-line no-undef
                source={require("../asset/images/logo_kse.jpeg")}
              />
            </View>
          </View>
          <View style={styles.box2}>
            <View style={styles.inner}>
              <Text style={styles.textTitle}>DATA WAREHOUSE</Text>
              {/* <Text style={styles.textDis}>
                aaaa
              </Text> */}
            </View>
          </View>
        </View>
      )}
      <DrawerItemList {...filteredProps} />
      <Divider style={{ height: 1 }} />
      <DrawerItem
        label={t("Logout")}
        icon={({ focused }) => {
          return (
            <SimpleLineIcons
              name="logout"
              size={20}
              color={focused ? "#673ab7" : "#546E7A"}
              // onLogout={onLogout}
              // logoutState={logoutState}
            />
          );
        }}
        onPress={() => {
          AsyncStorage.clear("token");
          // dispatch()
          DevSettings.reload();
        }}
      />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    height: 110,
    marginTop: -5,
  },
  box1: {
    width: "35%",
  },
  box2: {
    width: "65%",
  },
  inner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageLogo: {
    width: 90,
    height: 45,
  },
  textTitle: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  textDis: {
    color: "#000",
    fontSize: 16,
  },
});
