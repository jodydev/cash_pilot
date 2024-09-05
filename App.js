import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { FontContext } from "./src/context/FontContext";
import { useEffect, useState } from "react";
import InfoScreen from "./src/screens/InfoScreen";
import CarouselScreen from "./src/screens/CarouselScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import LoginScreen from "./src/screens/LoginScreen";
import LoaderScreen from "./src/screens/LoaderScreen";
import HomeScreen from "./src/screens/HomeScreen";
import UserProfileScreen from "./src/screens/UserProfileScreen";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import tw from 'twrnc';


const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    try {
      await SplashScreen.preventAutoHideAsync();
      await Font.loadAsync({
        "ARPDisplay-240": require("./assets/fonts/ARPDisplay-240.ttf"),
      });
      setFontsLoaded(true);
      await SplashScreen.hideAsync();
    } catch (error) {
      console.log("Errore nel caricamento dei font: ", error);
    }
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return;
  }


  const isAuthenticated = true;

  return (
    <FontContext.Provider value={{ fontFamily: "ARPDisplay-240" }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={isAuthenticated ? "HomeScreen" : "Info"}>
          <Stack.Screen
            name="Info"
            component={InfoScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CarouselScreen"
            component={CarouselScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RegisterScreen"
            component={RegisterScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LoaderScreen"
            component={LoaderScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="UserProfile"
            component={UserProfileScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </FontContext.Provider>
  );
}
