import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import CustomHeaderStack from "../../components/CustomHeader";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import PropTypes from "prop-types";
import {
  DataUploadLocal,
  getDatasetsAction,
} from "../../store/actions/datasetAction";
import { connect, useDispatch } from "react-redux";
import { compose } from "redux";
import { useIsFocused } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import { paginate } from "../../utils/handleError";
import { useCallback } from "react";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
function parseData(data) {
  if (!data) return {};
  if (typeof data === "object") return data;
  if (typeof data === "string") return JSON.parse(JSON.stringify(data));

  return {};
}
function DataScreen(props) {
  // console.log('props', props);
  const { datasets, onGetDatasetsData, datasetsLocal } = props;
  // const { datasetsData } = datasets;
  // const { t } = useTranslation();
  const isFocused = useIsFocused();
  useEffect(() => {
    onGetDatasetsData();
    // console.log(datasetsData);
  }, [isFocused]);

  const data = [
    {
      // datasetsData.map(datasets => (
      //   <li key = {datasets.id}>
      //     {datasets.title}
      //   </li>
      // ))
    },
    {
      id: 2,
      name: "data_User",
    },
    {
      id: 3,
      name: "data_Product",
    },
  ];

  const [tab, setTab] = useState(0);
  const dispatch = useDispatch();
  // console.log("props.navigation", props.navigation);

  return (
    <ScrollView style={styles.container}>
      <View style={{ height: 50 }}>
        <CustomHeaderStack {...props} />
      </View>
      <View style={styles.body}>
        <View style={styles.title}>
          <Entypo name="database" size={20} color={"#673ab7"} />
          <Text style={styles.textTitle}>Data</Text>
        </View>
        <View style={styles.layoutTable}>
          <View style={styles.tabs}>
            <Text onPress={() => setTab(0)} style={styles.textTab}>
              All
            </Text>
            <Text onPress={() => setTab(1)} style={styles.textTab}>
              My set
            </Text>
            <Text onPress={() => setTab(2)} style={styles.textTab}>
              This Workspace
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("NewDataset")}
          >
            <View style={styles.buttonCreate}>
              <Feather name="plus" size={20} color="#000" />
              <Text>New</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.searchSection}>
            <Feather
              style={styles.searchIcon}
              name="search"
              size={20}
              color="#673ab7"
            />
            <TextInput
              style={styles.input}
              placeholder="Search"
              onChangeText={(searchString) => {
                this.setState({ searchString });
              }}
              underlineColorAndroid="transparent"
            />
          </View>
          {tab === 0 ? (
            <View>
              <View style={styles.layoutCenter}>
                <View style={styles.headerTable}>
                  <View style={{ width: "10%" }}>
                    <Ionicons
                      style={styles.documentIcon}
                      name="document-text-outline"
                      size={20}
                      color="#673ab7"
                    />
                  </View>
                  <View style={{ width: "35%" }}>
                    <Text style={styles.textTab}>Product</Text>
                  </View>
                  <View style={{ width: "30%" }}>
                    <Text style={styles.textTab}>Name</Text>
                  </View>
                  <View style={{ width: "25%" }}>
                    <Text style={styles.textTab}>ReviewStar</Text>
                  </View>
                </View>
              </View>

              {datasetsLocal?.data && datasetsLocal?.data.length ? (
                <>
                  <FlatList
                    data={datasetsLocal.data}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    onEndReachedThreshold={0.5}
                    onRefresh={async () => {
                      // await setIsRefreshing(true);
                      // onGetJobListWish({ ...param, page: 1 });
                    }}
                    // onEndReached={handleOnEndReached}
                    renderItem={(item, index) => {
                      return (
                        <TouchableOpacity
                          style={styles.layoutCenter}
                          key={item.id}
                        >
                          <View style={styles.headerTable}>
                            <View style={{ width: "10%" }}>
                              <Image
                                style={styles.imageItem}
                                source={require("../../asset/images/icon_data_square.png")}
                              />
                            </View>
                            <View style={{ width: "35%" }}>
                              <Text style={styles.textTab}>
                                {item.item.Product}
                              </Text>
                            </View>
                            <View style={{ width: "45%" }}>
                              <Text style={styles.textTab}>
                                {item.item.ReviewTitle}
                              </Text>
                            </View>
                            <View style={{ width: "45%" }}>
                              <Text style={styles.textTab}>
                                {item.item.ReviewStar}
                              </Text>
                            </View>
                          </View>
                        </TouchableOpacity>
                      );
                    }}
                  />
                </>
              ) : null}
            </View>
          ) : null}
        </View>
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
    marginLeft: 10,
    marginRight: 10,
  },
  layoutTable: {
    backgroundColor: "#fff",
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  textTab: {
    fontSize: 12,
    margin: 10,
    textAlign: "center",
  },
  searchSection: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  input: {
    height: 45,
    width: 200,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    margin: 10,
    backgroundColor: "#fff",
    color: "#424242",
    borderColor: "#673ab7",
    borderWidth: 1,
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
  buttonCreate: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
    padding: 7,
    width: 70,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#000",
    backgroundColor: "#F2C810",
  },
});

DataScreen.propTypes = {
  onGetDatasetsAction: PropTypes.func,
  datasets: PropTypes.array,
};

const mapStateToProps = (state) => ({
  datasets: state.datasets?.datasetsData,
  datasetsLocal: state.datasets?.dataUploadLocal,
});

const mapDispatchToProps = (dispatch) => ({
  onGetDatasetsData: () => dispatch(getDatasetsAction()),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(DataScreen);
