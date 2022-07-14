import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import CustomHeaderStack from "../../components/CustomHeader";
import Feather from "react-native-vector-icons/Feather";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  resetWorkspaces,
  getWorkspacesAction,
} from "../../store/actions/workspacesAction";
import { clockRunning } from "react-native-reanimated";
import { useIsFocused } from "@react-navigation/native";
import { store } from "../../store/index";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
function WorkspaceScreen(props) {
  // console.log('props', props);
  const { workspaces, onGetWorkspacesData } = props;
  const { workspacesData } = workspaces;
  const { t } = useTranslation();
  const isFocused = useIsFocused();
  useEffect(() => {
    onGetWorkspacesData();
  }, [isFocused]);
  console.log({ workspacesData });

  return (
    <ScrollView style={styles.container}>
      <View style={{ height: 50 }}>
        <CustomHeaderStack {...props} />
      </View>

      <View style={styles.body}>
        <View style={styles.title}>
          <Feather name="layers" size={20} color={"#673ab7"} />
          <Text style={styles.textTitle}> Workspaces</Text>
        </View>
        <TouchableOpacity>
          <View style={styles.title}>
            {workspacesData.map((workspaces, index) => (
              <View key={index}>
                <Text>{workspaces.name}</Text>
                <Text>{workspaces.description}</Text>
              </View>
            ))}
          </View>
        </TouchableOpacity>
        {/* <TouchableOpacity>
          <View style={styles.title}>
            <Text style={styles.textTitle}> </Text>
          </View>
        </TouchableOpacity> */}
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
});

WorkspaceScreen.propTypes = {
  onGetWorkspacesData: PropTypes.func,
  resetWorkspaces: PropTypes.func,
  workspaces: PropTypes.object,
};

const mapStateToProps = (state) => ({
  workspaces: state.workspaces,
});

const mapDispatchToProps = (dispatch) => ({
  resetWorkspaces: () => dispatch(resetWorkspaces()),
  onGetWorkspacesData: () => dispatch(getWorkspacesAction()),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(WorkspaceScreen);
