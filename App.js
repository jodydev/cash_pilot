import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { FontContext } from "./src/context/FontContext";
import InfoScreen from "./src/screens/InfoScreen";
import CarouselScreen from "./src/screens/CarouselScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import LoginScreen from "./src/screens/LoginScreen";
import LoaderScreen from "./src/screens/LoaderScreen";
import HomeScreen from "./src/screens/HomeScreen";
import UserProfileScreen from "./src/screens/UserProfileScreen";
import AvvisiScreen from "./src/screens/AvvisiScreen";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useAuthRequest, makeRedirectUri } from "expo-auth-session";
import { Button, Alert, View } from "react-native";
import tw from "twrnc";

// const discovery = {
//   authorizationEndpoint: "https://auth.truelayer-sandbox.com/connect/authorize",
//   tokenEndpoint: "https://auth.truelayer-sandbox.com/connect/token",
// };

const Stack = createStackNavigator();

function App() {
  const isAuthenticated = true;
  // const [accessToken, setAccessToken] = useState(null);

  // const discovery = {
  //   authorizationEndpoint: "https://auth.truelayer-sandbox.com/",
  //   tokenEndpoint: "https://auth.truelayer-sandbox.com/connect/token",
  // };

  // const [request, response, promptAsync] = useAuthRequest(
  //   {
  //     clientId: "sandbox-cashpilot-b3ec3e", // Assicurati di usare il clientId corretto
  //     redirectUri: "https://console.truelayer.com/redirect-page", // Imposta questo come redirect_uri
  //     scopes: ["info", "accounts", "transactions"],
  //   },
  //   discovery
  // );

  // // Gestione della risposta di autenticazione
  // useEffect(() => {
  //   if (response?.type === "success") {
  //     const { code } = response.params;
  //     console.log("Authorization code:", code);
  //     exchangeCodeForToken(code);
  //   }
  // }, [response]);

  // const exchangeCodeForToken = async (code) => {
  //   try {
  //     const tokenResponse = await fetch(discovery.tokenEndpoint, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/x-www-form-urlencoded",
  //       },
  //       body: new URLSearchParams({
  //         client_id: "sandbox-cashpilot-b3ec3e",
  //         redirect_uri: makeRedirectUri({ useProxy: true }), // Assicurati che corrisponda
  //         grant_type: "authorization_code",
  //         code: code, // Passa il codice ricevuto
  //       }).toString(),
  //     });
  
  //     const tokenData = await tokenResponse.json();
  //     setAccessToken(tokenData.access_token);
  //     console.log("Access Token:", tokenData.access_token);
  //   } catch (error) {
  //     console.error("Errore durante lo scambio del token:", error);
  //     Alert.alert("Errore", "Impossibile ottenere il token di accesso");
  //   }
  // };

  // const handleLogin = () => {
  //   promptAsync();
  // };

  return (
    <FontContext.Provider value={{ fontFamily: "ARPDisplay-240" }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={isAuthenticated ? "HomeScreen" : "Info"}
        >
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
            component={(props) => (
              <HomeScreen
                // {...props}
                // handleLogin={handleLogin}
                // accessToken={accessToken}
              />
            )}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="UserProfileScreen"
            component={UserProfileScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AvvisiScreen"
            component={AvvisiScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </FontContext.Provider>
  );
}

export default App;
