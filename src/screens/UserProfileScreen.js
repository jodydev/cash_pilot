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

export default function UserProfileScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState("Andreaa");
  const [surname, setSurname] = useState("Vlasie");
  const [address, setAddress] = useState("Via Roma 1");
  const [profileImage, setProfileImage] = useState(null);
  const [countries, setCountries] = useState([]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const countryData = response.data.map((country) => ({
          label: country.name.common,
          value: country.cca2, // Codice ISO del paese
        }));
        setItems(countryData);
      } catch (err) {
        console.error("Errore nel recupero dei dati:", err);
        setError("Errore nel recupero dei dati dei paesi");
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  if (loading) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  }

  if (error) {
    return <ErrorScreen errorMsg={error} />;
  }

  // Funzione per scegliere l'immagine del profilo
  // const pickImage = () => {
  //   launchImageLibrary(
  //     {
  //       mediaType: "photo",
  //       quality: 1,
  //     },
  //     (response) => {
  //       if (response.didCancel) {
  //         console.log("User cancelled image picker");
  //       } else if (response.errorCode) {
  //         console.log("ImagePicker Error: ", response.errorMessage);
  //       } else {
  //         setProfileImage(response.assets[0].uri); // Usa URI dell'immagine
  //       }
  //     }
  //   );
  // };


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={tw`flex-1 bg-black py-20 px-5`}
    >
      <ScrollView contentContainerStyle={tw`flex-1`}>
        <Text style={tw`text-white text-3xl font-bold mb-5`}>
          Modifica Profilo
        </Text>

        {/* Immagine del profilo */}
        {/* <TouchableOpacity onPress={pickImage}> */}
        <TouchableOpacity>
          {profileImage ? (
            <Image
              source={{ uri: profileImage }}
              style={tw`w-20 h-20 rounded-full mb-4`}
            />
          ) : (
            <View
              style={tw`w-20 h-20 bg-gray-600 rounded-full items-center  justify-center mb-4`}
            >
              <FontAwesome name="camera" size={24} color="white" />
            </View>
          )}
        </TouchableOpacity>

        {/* Modifica Nome */}
        <Text style={tw`text-white text-base font-bold mb-2`}>Nome:</Text>
        <TextInput
          style={tw`bg-white text-black p-3 rounded mb-4`}
          value={name}
          onChangeText={setName}
        />

        {/* Modifica Cognome */}
        <Text style={tw`text-white text-base font-bold mb-2`}>Cognome:</Text>
        <TextInput
          style={tw`bg-white text-black p-3 rounded mb-4`}
          value={surname}
          onChangeText={setSurname}
        />

        {/* Modifica Città */}
        <Text style={tw`text-white text-base font-bold mb-2`}>Città:</Text>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="Seleziona un paese"
          style={tw`bg-white text-black p-2 rounded mb-4`}
          dropDownContainerStyle={tw`bg-white`}
          textStyle={tw`text-black`}
          placeholderStyle={tw`text-black`}
        />

        {/* Modifica Indirizzo */}
        <Text style={tw`text-white text-base font-bold mb-2`}>Indirizzo:</Text>
        <TextInput
          style={tw`bg-white text-black p-3 rounded mb-4`}
          value={address}
          onChangeText={setAddress}
        />

        {/* Bottone per salvare */}
        <View
          style={tw`flex items-center justify-center absolute bottom-10 left-0 right-0`}
        >
          <TouchableOpacity
            style={tw`bg-[${colors.primary}] w-full py-2 px-4 rounded-full`}
            onPress={() => navigation.navigate("HomeScreen")}
          >
            <Text
              style={[
                tw`text-[${colors.textPrimary}] font-bold text-base text-center`,
              ]}
            >
              Conferma Modifiche
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
