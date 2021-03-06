import React, { useState, useCallback, useEffect } from "react";
import MainScreen from "./src/screen/MainScreen";
import "./src/config/i18n";
import {
  NavigationContainer,
  DefaultTheme as NavDefaultTheme,
} from "@react-navigation/native";
import {
  DefaultTheme,
  DarkTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { Provider } from "react-redux";
import { View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { store } from "./src/store";
import { navigationRef } from "./src/helpers/RootNavigation";

const theme = {
  ...DefaultTheme,
  ...NavDefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...NavDefaultTheme.colors,
    primary: "#3498db",
    accent: "#f1c40f",
    background: "#FFF",
  },
};

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await setTimeout(() => {}, 1000);
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme} ref={navigationRef}>
          <View onLayout={onLayoutRootView} />
          <MainScreen />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}
