import React, { useEffect } from "react";
import { View, Text, Image, ActivityIndicator } from 'react-native';
import tw from 'twrnc';
import { LinearGradient } from "expo-linear-gradient";

export default function LoaderScreen({ navigation }) {
  useEffect(() => {
    // Imposta un timeout di 5 secondi e poi naviga alla HomeScreen
    const timer = setTimeout(() => {
      navigation.navigate("HomeScreen");
    }, 1000); // 1 secondo

    // Pulisce il timer se il componente viene smontato
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <LinearGradient
      colors={["rgba(30,215,95,1)", "black", "black", "black"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={tw`flex-1`}
    >
      <View style={tw`absolute top-[20%] left-0 right-0 items-center`}>
        <Image
          source={require("../../assets/img/logo.png")}
          style={tw`w-50 h-50`}
          resizeMode="contain"
        />
      </View>

      <View style={tw`flex-1 justify-center items-center mt-30 gap-y-3 px-10`}>
        <Text style={tw`text-white text-6xl font-bold mb-6 text-center`}>
          Wallet App
        </Text>
      
        <View style={tw`flex justify-center items-center`}>
          <ActivityIndicator size="large" color="#eaeaea" />
        </View>
        <View style={tw`flex justify-center items-center my-3`}>
          <Text
            style={tw`text-sm text-gray-500 font-semibold flex items-center justify-center`}
          >
            Sincronizzazione in corso del database...
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
}