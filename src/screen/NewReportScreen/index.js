import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import CustomHeaderStack from "../../components/CustomHeader";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import Modal from "react-native-modal";
import { useDispatch, useSelector } from "react-redux";
import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from "expo-file-system";
import { createReportsJsonAction } from "../../store/actions/reportsAction";
import { navigationRe, navigate } from "../../helpers/RootNavigation";

export default function NewReportScreen(props) {
  const [isModalVisible, setModalVisible] = useState(false);
  const { data: dataUploadLocal } = useSelector(
    (state) => state.datasets?.dataUploadLocal
  );
  const dispatch = useDispatch();
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const onPressItemClick = (item) => {
    FileSystem.readAsStringAsync(item.item.fileUrl, {
      encoding: FileSystem.EncodingType.UTF8,
    })
      .then((response) => {
        let data = [];
        let countStarOne = 0;
        let countStarTwo = 0;
        let countStarThree = 0;
        let countStarFour = 0;
        let countStarFine = 0;

        const dataFormat = JSON.parse(response).slice(0, 100);
        console.log(dataFormat);

        dataFormat.forEach((doc) => {
          if (doc.ReviewStar === 1) {
            countStarOne += 1;
          } else if (doc.ReviewStar === 2) {
            countStarTwo += 1;
          } else if (doc.ReviewStar === 3) {
            countStarThree += 1;
          } else if (doc.ReviewStar === 4) {
            countStarFour += 1;
          } else {
            countStarFine += 1;
          }
        });
        dispatch(
          createReportsJsonAction({
            data: [
              {
                countStarFour,
                countStarFine,
                countStarOne,
                countStarThree,
                countStarTwo,
              },
            ],
          })
        );
        setModalVisible(false);
        navigate("ItemReport", { nameReport: "Iris" });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{ height: 50 }}>
        <CustomHeaderStack onPress={() => {}} {...props} />
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
        <TouchableOpacity
          style={styles.layoutCreateReport}
          onPress={toggleModal}
        >
          <View style={styles.imageCreateReport}>
            <Image
              style={styles.imageItem}
              source={require("../../asset/images/icon_table_data.png")}
            />
          </View>
          <Text style={styles.textCreateReport}>Pick a published dataset</Text>
        </TouchableOpacity>
      </View>

      <Modal
        isVisible={isModalVisible}
        style={{}}
        onBackdropPress={toggleModal}
        onBackButtonPress={toggleModal}
      >
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <View
            style={{ backgroundColor: "white", width: "100%", height: "80%" }}
          >
            <Text style={{ textAlign: "center", marginTop: 20 }}>
              List Dataset
            </Text>
            {dataUploadLocal && dataUploadLocal.length ? (
              <>
                <FlatList
                  data={dataUploadLocal}
                  keyExtractor={(item, index) => index.toString()}
                  showsVerticalScrollIndicator={false}
                  onEndReachedThreshold={0.5}
                  contentContainerStyle={{ padding: 16 }}
                  // onEndReached={handleOnEndReached}
                  renderItem={(item, index) => {
                    return (
                      <TouchableOpacity
                        style={styles.layoutCenter}
                        key={item.id}
                        onPress={() => onPressItemClick(item)}
                      >
                        <View style={styles.headerTable}>
                          <View style={{ width: "10%" }}>
                            <Image
                              style={styles.imageItem}
                              source={require("../../asset/images/icon_data_square.png")}
                            />
                          </View>
                          <View style={{ width: "45%" }}>
                            <Text style={styles.textTab}>{item.item.name}</Text>
                          </View>
                          <View style={{ width: "45%" }}>
                            <Text style={styles.textTab}>{"json"}</Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    );
                  }}
                />
              </>
            ) : null}
          </View>
        </View>
      </Modal>
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
  textTab: {
    fontSize: 12,
    margin: 10,
    textAlign: "center",
  },
  layoutTable: {
    backgroundColor: "#fff",
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  headerTable: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#673ab7",
    borderBottomWidth: 0.5,
    width: "90%",
  },
  layoutCenter: {
    flexDirection: "row",
    justifyContent: "center",
  },
  imageItem: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
});
