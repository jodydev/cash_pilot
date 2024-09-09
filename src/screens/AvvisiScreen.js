import React, { useState, useEffect } from "react";
import { colors } from "../../custom-tailwind";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { launchImageLibrary } from "react-native-image-picker";
import { useNavigation } from "@react-navigation/native";
import ErrorScreen from "./ErrorScreen";
import tw from "twrnc";
import axios from "axios";

export default function AvvisiScreen() {
  return (
    <ScrollView contentContainerStyle={tw`flex-1 bg-black`}>
      <View style={tw`flex-1 justify-center items-center`}>
        <View style={tw`flex-1 w-full h-10 justify-center items-start bg-[${colors.primary}]`}>
          <Text style={tw`text-white text-xl font-bold flex-1 justify-center items-start `}>Avvisi</Text>
        </View>
        <View style={tw`flex-1 justify-center items-center`}>
          <Text style={tw`text-white text-xl`}>Nessun avviso</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#1c1c1e",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});
