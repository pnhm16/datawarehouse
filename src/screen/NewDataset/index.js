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
import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from "expo-file-system";
import { useDispatch, useSelector } from "react-redux";
import { DataUploadLocal } from "../../store/actions/datasetAction";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import API from "../../utils/axios";
import { Buffer } from "buffer";
export default function NewReportScreen(props) {
  const { data: dataUploadLocal } = useSelector(
    (state) => state.datasets?.dataUploadLocal
  );
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { t } = useTranslation();

  return (
    <ScrollView style={styles.container}>
      <View style={{ height: 50 }}>
        <CustomHeaderStack onPress={() => {}} {...props} />
      </View>
      <View style={styles.body}>
        <View style={styles.title}>
          <Text style={styles.textTitle}>Create a new report</Text>
        </View>
        {/* <TouchableOpacity style={styles.layoutCreateReport} onPress={()=>{}}>
            <View style={styles.imageCreateReport}>
              <Image
                style={styles.imageItem1}
                source={require("../../asset/images/icon_add_data.png")}
              />
            </View>
            <Text style={styles.textCreateReport}>Paste or manually enter data</Text>
          </TouchableOpacity> */}
        <TouchableOpacity
          style={styles.layoutCreateReport}
          onPress={() => {
            DocumentPicker.getDocumentAsync({ type: "application/json" })
              .then((response) => {
                console.log(response);
                dataUploadLocal?.length > 0
                  ? dispatch(
                      DataUploadLocal({
                        data: [
                          ...dataUploadLocal,
                          { fileUrl: response?.uri, name: response?.name },
                        ],
                      })
                    )
                  : dispatch(
                      DataUploadLocal({
                        data: [
                          { fileUrl: response?.uri, name: response?.name },
                        ],
                      })
                    );
                navigation.navigate(t("Dataset"));

                // FileSystem.readAsStringAsync(response?.uri, {
                //   encoding: FileSystem.EncodingType.UTF8,
                // })
                //   .then((response) => {

                //     navigation.navigate(t("Dataset"));
                //   })
                //   .catch((error) => {
                //     console.log(error);
                //   });
                //
              })
              .catch((error) => {
                console.log(error);
              });
          }}
        >
          <View style={styles.imageCreateReport}>
            <Image
              style={styles.imageItem}
              source={require("../../asset/images/icon_table_data.png")}
            />
          </View>
          <Text style={styles.textCreateReport}>Upload new dataset</Text>
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
