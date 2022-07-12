import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import CustomHeaderStack from "../../components/CustomHeader";
import { Avatar, TextInput } from "react-native-paper";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function ProfileScreen(props) {
  const [text, setText] = useState("");
  return (
    <ScrollView style={styles.container}>
      <View style={{ height: 50 }}>
        <CustomHeaderStack {...props} />
      </View>
      <View style={styles.body}>
        {/* <View style={styles.title}>
          <Text style={styles.textTitle}>Profile</Text>
        </View> */}
        <View style={styles.layoutCenter}>
          <Avatar.Image
            style={{margin: 10}}
            size={70}
            source={require("../../asset/images/avatar.jpeg")}
          />
          <TextInput
            style={styles.input}
            label="First Name"
            value={text}
            mode="outlined"
            onChangeText={(text) => setText(text)}
          />
          <TextInput
            style={styles.input}
            label="Last Name"
            value={text}
            mode="outlined"
            onChangeText={(text) => setText(text)}
          />
          <TextInput
            style={styles.input}
            label="Email Address"
            value={text}
            mode="outlined"
            onChangeText={(text) => setText(text)}
          />
          <TextInput
            style={styles.input}
            label="Company"
            value={text}
            mode="outlined"
            onChangeText={(text) => setText(text)}
          />
          <TextInput
            style={styles.input}
            label="Phone"
            value={text}
            mode="outlined"
            onChangeText={(text) => setText(text)}
          />
          <TextInput
            style={styles.input}
            label="Status"
            value={text}
            mode="outlined"
            onChangeText={(text) => setText(text)}
          />
          <View>
              <TouchableOpacity style={styles.button}>
                  <Text>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                  <Text>Cancel</Text>
              </TouchableOpacity>
          </View>
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
    margin: 10,
    height: 40,
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
  },
  textTitle: {
    fontSize: 16,
  },
  layoutCenter: {
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    alignSelf: "center",
    backgroundColor: "#fff",
    width: "90%",
    height: 46,
    marginBottom: 10,
  },
  button:{
      backgroundColor: '#fff'
  }
});
