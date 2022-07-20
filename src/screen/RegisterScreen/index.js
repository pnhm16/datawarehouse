import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  DevSettings,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { compose } from "redux";
import PropTypes from "prop-types";
import { TextInput, Divider } from "react-native-paper";
import { registerAction } from "../../store/actions/registerAction";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";

function RegisterScreen(props) {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const { onregister, registerState } = props;
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [companyName, setCompanyName] = React.useState("");
  const [position, setPosition] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState("");

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  // console.log("props", props)
  //   useEffect(() => {
  //     if (registerState.success) {
  //       Alert.alert("Register success");
  //       // DevSettings.reload();
  //       // onReset();
  //     }
  //   }, [registerState.success]);

  //   useEffect(() => {
  //     if (registerState.error) {
  //       Alert.alert("Register failed");
  //       // onReset();
  //     }
  //   }, [registerState.error]);
  const handleConfirm = (date) => {
    console.log("A date has been picked: ", date);
    setDate(moment(date).format("YYYY-MM-DD"));
    hideDatePicker();
  };
  const onSubmit = () => {
    if (
      !phone ||
      !email ||
      !password ||
      !date ||
      !companyName ||
      !userName ||
      !position
    ) {
      return Alert.alert("ERROR", "PLEASE COMPLETE FIELD");
    }
    return onregister({
      username: userName,
      phone,
      compName: companyName,
      email,
      password,
      title: position,
      birthday: date,
    });
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.layout}>
          <Text style={styles.title}>DATA WAREHOUSE</Text>
          <Text style={styles.subtitle}>{t("Hi, Welcome Back")}</Text>
          <Image
            style={styles.image}
            source={require("../../asset/images/logo_kse.jpeg")}
          />
          <Text style={styles.textSign}>Register</Text>

          <TextInput
            style={styles.input}
            label="Email Address"
            value={email}
            mode="outlined"
            onChangeText={(userName) => setEmail(userName)}
          />

          <TextInput
            style={styles.input}
            label="User Name"
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
          <TextInput
            style={styles.input}
            label="Company Name"
            value={companyName}
            mode="outlined"
            onChangeText={(userName) => setCompanyName(userName)}
          />
          <TextInput
            style={styles.input}
            label="Position"
            value={position}
            mode="outlined"
            onChangeText={(userName) => setPosition(userName)}
          />
          <TextInput
            style={styles.input}
            label="Date"
            value={date}
            disabled={true}
            mode="outlined"
            //   onChangeText={(userName) => setUserName(userName)}
            right={
              <TextInput.Icon
                name={() => (
                  <MaterialCommunityIcons
                    name={"calendar-clock"}
                    size={28}
                    color={"black"}
                  />
                )} // where <Icon /> is any component from vector-icons or anything else
                onPress={() => {
                  isDatePickerVisible ? hideDatePicker() : showDatePicker();
                }}
              />
            }
          />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            date={new Date()}
          />
          <TextInput
            style={styles.input}
            label="Phone"
            value={phone}
            mode="outlined"
            keyboardType="phone-pad"
            onChangeText={(userName) => setPhone(userName)}
          />

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
                Register
                {/* {registerState.loading ? "Loading" : "Register"} */}
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
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.textSign}>I have an account. Sign In</Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: 50 }} />
      </ScrollView>
    </KeyboardAvoidingView>
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
    fontSize: 15,
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
RegisterScreen.propTypes = {
  registerState: PropTypes.object,
  onregister: PropTypes.func,
};

const mapStateToProps = (state) => ({
  registerState: state.register,
});

const mapDispatchToProps = (dispatch) => ({
  // onReset: () => dispatch(resetAction()),
  onregister: (body) => dispatch(registerAction(body)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(RegisterScreen);
