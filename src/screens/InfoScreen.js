import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import tw from "twrnc";
import { useContext } from "react";
import { FontContext } from "../context/FontContext";
import { colors } from "../../custom-tailwind";

export default function InfoScreen({ navigation }) {
  const { fontFamily } = useContext(FontContext);

  return (
    <ImageBackground
      source={require("../../assets/img/bg.png")}
      style={tw`flex-1 bg-[${colors.background}]`}
    >
      <View style={tw`flex-1 justify-center items-center px-10 mb-40`}>
        <Text style={[tw`text-[${colors.primary}] text-6xl font-bold mb-5`]}>
          Trasforma il modo in cui gestisci il{" "}
          <Text style={tw`text-[${colors.textPrimary}]`}>denaro</Text>
        </Text>
        <Text
          style={[
            tw`text-[${colors.textPrimary}] text-2xl font-base mb-12 text-start`,
          ]}
        >
          Tieni traccia delle tue spese e risparmia per ciò che conta.
        </Text>
      </View>
      <View style={tw`absolute top-115 left-0 right-0 items-center mt-10`}>
        <Image
          source={require("../../assets/img/carousel/carousel2.png")}
          style={tw`w-60 h-52`}
          resizeMode="contain"
        />
      </View>
      <View style={tw`w-full px-10 flex items-center justify-center mb-8`}>
        <TouchableOpacity
          style={tw`bg-[${colors.primary}] w-full py-2 px-4 rounded-full`}
          onPress={() => navigation.navigate("CarouselScreen")}
        >
          <Text
            style={[
              tw`text-[${colors.textPrimary}] font-bold text-lg text-center`,
            ]}
          >
            Inizia Ora
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
