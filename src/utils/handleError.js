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

export const paginate = (array, page_size, page_number) => {
  // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
  return array.slice((page_number - 1) * page_size, page_number * page_size);
};
