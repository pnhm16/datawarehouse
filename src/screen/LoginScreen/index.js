import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  DevSettings,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { compose } from "redux";
import PropTypes from "prop-types";
import { TextInput, Divider } from "react-native-paper";
import {
  resetAction,
  loginAction,
  loginSuccess,
} from "../../store/actions/loginAction";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

function LoginScreen(props) {
  const { t } = useTranslation();
  const { onLogin, loginState, onReset } = props;
  const navigation = useNavigation();
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);

  // console.log("props", props)
  useEffect(() => {
    if (loginState.success) {
      Alert.alert("Login success");
      // DevSettings.reload();
      // onReset();
    }
  }, [loginState.success]);

  useEffect(() => {
    if (loginState.error) {
      Alert.alert("Login failed");
      // onReset();
    }
  }, [loginState.error]);

  const onSubmit = () => {
    onLogin({
      userName: userName,
      password: password,
      isLdap: false,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.layout}>
        <Text style={styles.title}>DATA WAREHOUSE</Text>
        <Text style={styles.subtitle}>{t("Hi, Welcome Back")}</Text>
        <Image
          style={styles.image}
          source={require("../../asset/images/logo_kse.jpeg")}
        />
        <Text style={styles.textSign}>Sign in with Email address</Text>
        <TextInput
          style={styles.input}
          label="Email Address"
          value={userName}
          mode="outlined"
          onChangeText={(userName) => setUserName(userName)}
        />
        <TextInput
          style={styles.input}
          label="Password"
          value={password}
          mode="outlined"
          secureTextEntry={isPasswordSecure}
          onChangeText={(password) => setPassword(password)}
          right={
            <TextInput.Icon
              name={() => (
                <MaterialCommunityIcons
                  name={isPasswordSecure ? "eye-off" : "eye"}
                  size={28}
                  color={"black"}
                />
              )} // where <Icon /> is any component from vector-icons or anything else
              onPress={() => {
                isPasswordSecure
                  ? setIsPasswordSecure(false)
                  : setIsPasswordSecure(true);
              }}
            />
          }
        />
        <Text style={styles.forgot}>Forgot Password?</Text>
        <TouchableOpacity onPress={onSubmit}>
          <View style={styles.buttonSign}>
            <Text
              style={{
                color: "#fff",
                alignSelf: "center",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {loginState.loading ? "Loading" : "Sign in"}
            </Text>
          </View>
        </TouchableOpacity>
        <Divider
          style={{
            marginBottom: 30,
            marginTop: 20,
            height: 1,
            width: "90%",
            alignSelf: "center",
          }}
        />
        <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
          <Text style={styles.textSign}>Don't have an account?</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E3F2FD",
    paddingTop: 50,
  },
  layout: {
    backgroundColor: "#ffffff",
    margin: 15,
    flex: 1,
    borderRadius: 20,
  },
  title: {
    alignItems: "center",
    alignSelf: "center",
    fontSize: 24,
    fontWeight: "bold",
    padding: 15,
  },
  subtitle: {
    alignItems: "center",
    color: "#673ab7",
    fontWeight: "bold",
    fontSize: 18,
    alignSelf: "center",
  },
  image: {
    height: 89,
    width: 180,
    margin: 15,
    alignItems: "center",
    alignSelf: "center",
  },
  textSign: {
    alignItems: "center",
    color: "#000",
    fontWeight: "bold",
    fontSize: 14,
    alignSelf: "center",
    marginBottom: 20,
  },
  buttonCreate: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
    padding: 10,
    width: 130,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#000",
    backgroundColor: "#F2C810",
  },
  input: {
    alignSelf: "center",
    backgroundColor: "#fff",
    width: "90%",
    // height: 50,
    marginBottom: 15,
  },
  forgot: {
    alignSelf: "flex-end",
    color: "#673ab7",
    fontWeight: "bold",
    fontSize: 14,
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 30,
  },
  buttonSign: {
    backgroundColor: "#673ab7",
    color: "#fff",
    height: 45,
    borderRadius: 5,
    width: 300,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
LoginScreen.propTypes = {
  loginState: PropTypes.object,
  onLogin: PropTypes.func,
  onReset: PropTypes.func,
};

const mapStateToProps = (state) => ({
  loginState: state.login,
});

const mapDispatchToProps = (dispatch) => ({
  // onReset: () => dispatch(resetAction()),
  onLogin: (body) => dispatch(loginAction(body)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(LoginScreen);
