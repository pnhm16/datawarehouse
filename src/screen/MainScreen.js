/* eslint-disable react/prop-types */
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screen/HomeScreen";
import FavoritesScreen from "./FavoritesScreen";
import RecentScreen from "./RecentScreen";
import DataScreen from "./DataScreen";
import UserScreen from "./UserScreen";
import FilterScreen from "./FilterScreen";
import ItemReportScreen from "./ItemReportScreen";
import * as WebBrowser from "expo-web-browser";
import { useTranslation } from "react-i18next";
import { CustomDrawer } from "../components/CustomDrawer";
import { ACCESS_TOKEN } from "../constant/envVar";
import { BackHandler, Alert, View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoginScreen from "./LoginScreen";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import SettingScreen from "./SettingScreen";
import NewReportScreen from "./NewReportScreen";
import ProfileScreen from "./ProfileScreen";
import ShareScreen from "./ShareScreen";
import QueryScreen from "./QueryScreen";
import WorkspaceScreen from "./Workspace";
import NewDataset from "./NewDataset";
import { useDispatch, useSelector } from "react-redux";
import { TOKEN } from "../store/constants/loginConstant";

WebBrowser.maybeCompleteAuthSession();

export default function MainScreen(props) {
  const { t } = useTranslation();
  // const [isLogin, setIsLogin] = React.useState(false);
  const { token: isLogin } = useSelector((state) => state.token);
  console.log("props", props);
  const Drawer = createDrawerNavigator();

  const Stack = createNativeStackNavigator();
  const dispatch = useDispatch();

  // const isLogin = AsyncStorage.setItem('token', data.access_token);

  React.useEffect(() => {
    const backAction = () => {
      Alert.alert(t("canhBao"), t("banCoMuonThoatKhoiUngDung"), [
        {
          text: t("huyBo"),
          onPress: () => null,
          style: "cancel",
        },
        {
          text: t("co"),
          onPress: () => {
            BackHandler.exitApp();
          },
        },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);
  React.useEffect(() => {
    const getToken = async () => {
      const token = await AsyncStorage.getItem("token");
      console.log("token", token);
      if (token) {
        dispatch({ type: TOKEN, token });

        // setIsLogin(true);
      }
    };
    getToken();
  }, []);

  const Root = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          options={{
            title: t("Home"),
            headerShown: false,
          }}
          component={HomeScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="NewReport"
          component={NewReportScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Profile"
          component={ProfileScreen}
        />
        <Stack.Screen
          name="ItemReport"
          options={{
            headerShown: false,
          }}
          component={ItemReportScreen}
        />
        <Stack.Screen
          name="NewDataset"
          options={{
            headerShown: false,
          }}
          component={NewDataset}
        />
        <Stack.Screen name="Filter" component={FilterScreen} />
      </Stack.Navigator>
    );
  };

  return Boolean(isLogin) ? (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name={t("Home")}
        component={Root}
        options={{
          headerShown: false,
          drawerIcon: ({ focused }) => (
            <FontAwesome
              name="home"
              size={20}
              color={focused ? "#673ab7" : "#546E7A"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={t("Favorites")}
        component={FavoritesScreen}
        options={{
          headerShown: false,
          drawerIcon: ({ focused }) => (
            <FontAwesome
              name="heart"
              size={20}
              color={focused ? "#673ab7" : "#546E7A"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={t("Recent")}
        component={RecentScreen}
        options={{
          headerShown: false,
          drawerIcon: ({ focused }) => (
            <AntDesign
              name="clockcircleo"
              size={20}
              color={focused ? "#673ab7" : "#546E7A"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={t("Dataset")}
        component={DataScreen}
        options={{
          headerShown: false,
          drawerIcon: ({ focused }) => (
            <FontAwesome
              style={{ marginLeft: 3 }}
              name="database"
              size={20}
              color={focused ? "#673ab7" : "#546E7A"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={t("User Management")}
        component={UserScreen}
        options={{
          headerShown: false,
          drawerIcon: ({ focused }) => (
            <AntDesign
              name="user"
              size={20}
              color={focused ? "#673ab7" : "#546E7A"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={t("Workspaces")}
        component={WorkspaceScreen}
        options={{
          headerShown: false,
          drawerIcon: ({ focused }) => (
            <Feather
              name="layers"
              size={20}
              color={focused ? "#673ab7" : "#546E7A"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={t("Shared")}
        component={ShareScreen}
        options={{
          headerShown: false,
          drawerIcon: ({ focused }) => (
            <AntDesign
              name="sharealt"
              size={20}
              color={focused ? "#673ab7" : "#546E7A"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={t("Query")}
        component={QueryScreen}
        options={{
          headerShown: false,
          drawerIcon: ({ focused }) => (
            <AntDesign
              name="codesquareo"
              size={20}
              color={focused ? "#673ab7" : "#546E7A"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={t("Setting")}
        component={SettingScreen}
        options={{
          headerShown: false,
          drawerIcon: ({ focused }) => (
            <AntDesign
              name="setting"
              size={20}
              color={focused ? "#673ab7" : "#546E7A"}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  ) : (
    <LoginScreen />
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
    </View>
  );
}
