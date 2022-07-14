import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert, DevSettings } from "react-native";

export const hanldeError = (error) => {
  if (error.status === 403) {
    Alert.alert(
      "Version Login",
      "Please login",
      [
        {
          text: "OK",
          onPress: () => {
            AsyncStorage.removeItem("token");
            DevSettings.reload();
          },
        },
      ],
      { cancelable: false }
    );
  } else {
    console.error(error.data.message);
  }
};
