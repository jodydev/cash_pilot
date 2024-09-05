import React from "react";
import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import tw from "twrnc";
import { LinearGradient } from "expo-linear-gradient";

export default function RegisterScreen({ navigation }) {
  return (
    <LinearGradient
      colors={["rgba(30,215,95,1)", "black", "black", "black"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={tw`flex-1`}
    >
      <View style={tw`absolute top-[8%] left-0 right-0 items-center`}>
        <Image
          source={require("../../assets/img/logo.png")}
          style={tw`w-50 h-50`}
          resizeMode="contain"
        />
      </View>

      <View style={tw`flex-1 justify-center items-center mt-40 gap-y-3 px-10`}>
        <Text style={tw`text-white text-2xl font-bold mb-6 text-center`}>
          Iscriviti qui sotto per creare un account gratuito
        </Text>
        <View
          style={tw`w-full flex-row justify-center items-center gap-x-8 px-20`}
        >
          {/* Bottone Google */}
          <View style={tw`items-center`}>
            <TouchableOpacity
              style={tw`w-16 h-16 bg-white rounded-full justify-center items-center shadow-md`}
              onPress={() => navigation.navigate("LoaderScreen")}
              >
              <Image
                source={require("../../assets/icons/google-logo.png")}
                style={tw`w-10 h-10`}
              />
            </TouchableOpacity>
            <Text style={tw`mt-2 text-base text-gray-500`}>Google</Text>
          </View>

          {/* Bottone LinkedIn */}
          <View style={tw`items-center`}>
            <TouchableOpacity
              style={tw`w-16 h-16 bg-white rounded-full justify-center items-center shadow-md`}
              onPress={() => navigation.navigate("LoaderScreen")}
            >
              <Image
                source={require("../../assets/icons/linkedin-logo.png")}
                style={tw`w-10 h-10`}
              />
            </TouchableOpacity>
            <Text style={tw`mt-2 text-base text-gray-500`}>LinkedIn</Text>
          </View>

          {/* Bottone Email */}
          <View style={tw`items-center`}>
            <TouchableOpacity
              style={tw`w-16 h-16 bg-white rounded-full justify-center items-center shadow-md`}
              onPress={() => navigation.navigate("LoaderScreen")}
            >
              <Image
                source={require("../../assets/icons/email-logo.png")}
                style={tw`w-10 h-10`}
              />
            </TouchableOpacity>
            <Text style={tw`mt-2 text-base text-gray-500`}>Email</Text>
          </View>
        </View>
        <View style={tw`flex justify-center items-center my-3`}>
          <TouchableOpacity
            style={tw`flex flex-row w-full h-10 bg-white rounded-md justify-start items-center shadow-md px-10`}
            onPress={() => navigation.navigate("LoaderScreen")}
            >
            <Image
              source={require("../../assets/icons/apple-logo.png")}
              style={tw`w-6 h-6`}
            />
            <Text
              style={tw`mt-1 mx-1 text-sm text-black font-semibold flex items-center justify-center`}
            >
              Accedi con Apple
            </Text>
          </TouchableOpacity>
        </View>
        <View style={tw`flex justify-center items-center my-3`}>
        <Text
        style={tw`text-sm text-gray-500 font-semibold flex items-center justify-center`}
      >
        Hai già un account?{" "}
        <Pressable onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={tw`text-blue-500`}>Accedi</Text>
        </Pressable>
      </Text>
        </View>
        <View style={tw`absolute top-140 left-0 right-0 items-center  px-10`}>
          <Text
            style={tw`text-xs text-gray-500 font-semibold flex items-center text-center justify-center`}
          >
            Registrandoti accetti con i servizi sopra citati acconsenti al
            trattamento dei dati descritti qui{" "}
            <Text style={tw`text-blue-500`}>Termini e condizioni</Text> e
            riconosci la nostra{" "}
            <Text style={tw`text-blue-500`}>Informativa sulla privacy</Text> che
            descrive come trattiamo i tuoi dati e come garantiamo la tua
            privacy.
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
}
