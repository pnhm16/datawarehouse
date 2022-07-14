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
import React, { useState } from "react";
import CustomHeaderStack from "../../components/CustomHeader";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { useIsFocused } from "@react-navigation/native";
import { favoriteAction } from "../../store/actions/favoriteAction";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const data = [
  {
    id: 1,
    name: "report_Iris",
  },
  {
    id: 2,
    name: "report_User",
  },
  {
    id: 3,
    name: "report_Product",
  },
];

function FavoritesScreen(props) {
  const [tab, setTab] = useState(0);
  const { favoriteData, onGetFavoriteUser } = props;
  const isFocused = useIsFocused();

  React.useEffect(() => {
    onGetFavoriteUser();
  }, [isFocused]);
  console.log("favorite", favoriteData);

  return (
    <ScrollView style={styles.container}>
      <View style={{ height: 50 }}>
        <CustomHeaderStack {...props} />
      </View>
      <View style={styles.body}>
        <View style={styles.title}>
          <AntDesign name="heart" size={20} color={"#673ab7"} />
          <Text style={styles.textTitle}>Favorites</Text>
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
                  <View style={{ width: "45%" }}>
                    <Text style={styles.textTab}>Name</Text>
                  </View>
                  <View style={{ width: "45%" }}>
                    <Text style={styles.textTab}>Endorsement</Text>
                  </View>
                </View>
              </View>
              {data.map((item) => {
                return (
                  <TouchableOpacity
                    style={styles.layoutCenter}
                    key={item.id}
                    onPress={() =>
                      props.navigation.navigate("ItemReport", {
                        name: item.name,
                      })
                    }
                  >
                    <View style={styles.headerTable}>
                      <View style={{ width: "10%" }}>
                        <Image
                          style={styles.imageItem}
                          source={require("../../asset/images/icon_report_square.png")}
                        />
                      </View>
                      <View style={{ width: "45%" }}>
                        <Text style={styles.textTab}>{item.name}</Text>
                      </View>
                      <View style={{ width: "45%" }}>
                        <Text style={styles.textTab}></Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
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
    fontSize: 16,
    margin: 10,
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
});

FavoritesScreen.propTypes = {
  onGetFavoriteUser: PropTypes.func,
  favoriteData: PropTypes.array,
};

const mapStateToProps = (state) => ({
  favoriteData: state.favorite?.data,
});

const mapDispatchToProps = (dispatch) => ({
  onGetFavoriteUser: () => dispatch(favoriteAction()),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(FavoritesScreen);
