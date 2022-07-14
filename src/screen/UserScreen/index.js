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
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import { userAction } from "../../store/actions/userAction";
import { useIsFocused } from "@react-navigation/native";
const data = [
  {
    id: 1,
    name: "User1",
  },
  {
    id: 2,
    name: "User2",
  },
  {
    id: 3,
    name: "User3",
  },
  {
    id: 4,
    name: "User4",
  },
];

function UserScreen(props) {
  const { userData, onGetCurrentUser } = props;

  const [tab, setTab] = useState(0);
  const isFocused = useIsFocused();
  React.useEffect(() => {
    onGetCurrentUser();
  }, [isFocused]);
  console.log(userData);
  return (
    <ScrollView style={styles.container}>
      <View style={{ height: 50 }}>
        <CustomHeaderStack {...props} />
      </View>
      <View style={styles.body}>
        <View style={styles.title}>
          <Entypo name="users" size={20} color={"#673ab7"} />
          <Text style={styles.textTitle}>User Management</Text>
        </View>
        <View style={styles.layoutTable}>
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
                      name="ios-person-outline"
                      size={20}
                      color="#673ab7"
                    />
                  </View>
                  <View style={{ width: "45%" }}>
                    <Text style={styles.textTab}>Name</Text>
                  </View>
                  <View style={{ width: "45%" }}>
                    <Text style={styles.textTab}>Action</Text>
                  </View>
                </View>
              </View>
              {[userData].map((item) => {
                return (
                  <TouchableOpacity style={styles.layoutCenter} key={item.id}>
                    <View style={styles.headerTable}>
                      <View style={{ width: "10%" }}>
                        <Image
                          style={styles.imageItem}
                          source={require("../../asset/images/icon_user.png")}
                        />
                      </View>
                      <View style={{ width: "45%" }}>
                        <Text style={styles.textTab}>{item.username}</Text>
                      </View>
                      <View style={{ width: "15%" }}>
                        <Ionicons
                          style={styles.documentIcon}
                          name="person-remove"
                          size={20}
                          color="black"
                        />
                      </View>
                      <View style={{ width: "45%" }}>
                        <Ionicons
                          style={styles.documentIcon}
                          name="pencil-sharp"
                          size={20}
                          color="black"
                        />
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
    overflow: "hidden",
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
UserScreen.propTypes = {
  onGetCurrentUser: PropTypes.func,
  userData: PropTypes.object,
};

const mapStateToProps = (state) => ({
  userData: state.user?.data,
});

const mapDispatchToProps = (dispatch) => ({
  onGetCurrentUser: () => dispatch(userAction()),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(UserScreen);
