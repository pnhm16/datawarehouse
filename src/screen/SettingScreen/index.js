import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import CustomHeaderStack from "../../components/CustomHeader";
import { Button } from "react-native-paper";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { Picker } from "@react-native-picker/picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DropDownPicker from "react-native-dropdown-picker";
import AntDesign from "react-native-vector-icons/AntDesign";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function SettingScreen(props) {
  const { t } = useTranslation();
  const onChangeLanguge = async (itemValue) => {
    await i18n.changeLanguage(itemValue);
  };
  return (
    <ScrollView style={styles.container}>
      <View style={{ height: 50 }}>
        <CustomHeaderStack {...props} />
      </View>
      <View style={styles.body}>
        <View style={styles.title}>
            <AntDesign
              name="setting"
              size={20}
              color={ "#673ab7" }
            />
          <Text style={styles.textTitle}>{t("  Setting")}</Text>
        </View>
        <View style={styles.layoutButton}>
          <TouchableOpacity style={styles.button} onPress={()=>onChangeLanguge('vi')}>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: "https://flagcdn.com/w160/vn.png",
              }}
            />
            <Text>{t("Setting.vi")}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>onChangeLanguge('en')}>
          <Image
              style={styles.tinyLogo}
              source={{
                uri: "https://flagcdn.com/w160/gb.png",
              }}
            />
            <Text>{t("Setting.en")}</Text>
          </TouchableOpacity>
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
    flex: 1,
    margin: 10,
    borderRadius: 20,
    height: windowHeight,
    backgroundColor: "#E3F2FD",
  },
  title: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginLeft: 10,
    marginRight:10,
    marginTop:10,
    height: 40,
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
  },
  tinyLogo: {
    width: 25,
    height: 25,
    borderRadius:15,
    marginRight:5
  },
  textTitle: {
    fontSize: 16,
  },
  layoutPicker: {
    backgroundColor: "#fff",
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 10,
  },
  picker: {
    height: 50,
  },
  button: {
    height: 50,
    width: 120,
    borderRadius: 10,
    marginRight:10,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  layoutButton: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  },
});
