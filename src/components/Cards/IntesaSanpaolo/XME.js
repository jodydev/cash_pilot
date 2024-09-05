import { View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import tw from "twrnc";

export default function XME() {
  const cardType = "mastercard";

  return (
    <View style={tw`flex-1 bg-gray-900 rounded-2xl mr-4`}>
      <LinearGradient
        colors={["#0282c8", "#0282c8"]}
        style={tw`w-85 h-50 rounded-lg py-3 px-4 relative overflow-hidden justify-between items-start shadow-lg`}
      >
        <View style={tw`flex-1 w-full relative`}>
          {/* Sezione per il logo e il nome della carta */}
          <View style={tw`flex-row items-center mb-2 relative`}>
            {/* Logo Intesa Sanpaolo a sinistra */}
            <View style={tw`absolute left-0 top-0 p-1`}>
              <Image
                source={require("../../../../assets/cards/intesa-sanpaolo-logo.png")} // Logo Intesa Sanpaolo
                style={tw`w-54 h-6`}
              />
            </View>
            {/* Testo XME Card a destra */}
            <View style={tw`absolute right-0 top-2 flex-col`}>
              <Text style={tw`text-white font-bold`}>
                XME <Text style={tw`text-white`}>Card</Text>
              </Text>
            </View>
          </View>

          {/* Chip */}
          <View style={tw`absolute left-0 top-20`}>
            <Image
              source={require("../../../../assets/cards/chip-grey.png")}
              style={tw`w-20 h-10`}
            />
          </View>

          <View style={tw`absolute right-3 top-18`}>
            <Image
              source={require("../../../../assets/cards/pago3.png")}
              style={tw`w-16 h-10`}
            />
          </View>

          <Text
            style={tw`text-white text-lg font-semibold mt-2 w-full absolute bottom-0`}
          >
            SALDO: <Text style={tw`text-yellow-400 text-lg`}>5.000,00 €</Text>
          </Text>

          {/* Logo Mastercard o Visa */}
          <View style={tw`absolute bottom-2 right-2`}>
            {cardType === "mastercard" ? (
              <Image
                source={require("../../../../assets/cards/mastercard.png")}
                style={tw`w-18 h-10`}
              />
            ) : (
              <Image
                source={require("../../../../assets/cards/visa.png")}
                style={tw`w-18 h-10`}
              />
            )}
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}
