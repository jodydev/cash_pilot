import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";
import { colors } from "../../custom-tailwind";
import Feather from "@expo/vector-icons/Feather";

export default function UserData() {
  const navigation = useNavigation();

  return (
    <View>
      <View style={tw`flex-row items-center justify-between mt-18`}>
        <Text style={tw`text-white text-3xl ml-3 font-bold`}>Ciao,</Text>

        <View style={tw`flex-row items-center`}>
          {/* Avatar */}
          <TouchableOpacity onPress={() => navigation.navigate("UserProfileScreen")}>
            <View style={tw`relative`}>
              <Image
                source={require("../../assets/img/avatar.jpeg")}
                style={tw`w-10 h-10 rounded-full`}
              />
            </View>
          </TouchableOpacity>

          {/* Icona campanello */}
          <View style={tw`relative`}>
            <TouchableOpacity
              onPress={() => navigation.navigate("AvvisiScreen")}
              style={tw`mx-4`}
            >
              <Feather name="bell" size={30} color="white" />
            </TouchableOpacity>

            {/* Badge numerico sopra l'icona */}
            <View
              style={tw`absolute top-0 right-3 bg-red-500 w-4 h-4 rounded-full items-center justify-center`}
            >
              <Text style={tw`text-white text-xs`}>3</Text>
            </View>
          </View>
        </View>
      </View>

      <Text style={tw`text-[${colors.primary}] font-bold text-4xl ml-3`}>
        Andreea
      </Text>
    </View>
  );
}
