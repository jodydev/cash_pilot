import { View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import tw from "twrnc"; 

export default function PostePayEvolution() {
  const cardType = "mastercard";

  return (
    <View style={tw`flex-1 bg-gray-900 rounded-2xl mr-4`}>
      <LinearGradient
        colors={["#1e1e1e", "#000"]}
        style={tw`w-85 h-50 rounded-lg py-3 px-4 relative overflow-hidden justify-between items-start shadow-lg`}
      >
        <View style={tw`flex-1 w-full relative`}>
          <View style={tw`flex-row items-center mb-2 relative`}>
            <View style={tw`flex-col`}>
              <Text style={tw`text-yellow-400 text-3xl font-base italic`}>
                poste
                <Text style={tw`text-yellow-400 text-3xl font-bold italic`}>
                  pay
                </Text>
              </Text>
              <Text style={tw`text-yellow-400 font-bold text-xl mx-15`}>
                Evolution
              </Text>
            </View>
            <View style={tw`absolute right-0 top-[-5px] p-1`}>
              <Image
                source={require("../../../../assets/cards/atm-postamat.jpeg")}
                style={tw`w-20 h-5`}
              />
            </View>
          </View>
          <View style={tw`absolute left-0 top-20`}>
            <Image
              source={require("../../../../assets/cards/chip.png")}
              style={tw`w-20 h-10`}
            />
          </View>
          <Text style={tw`text-gray-400 text-4xl self-end mt-3`}>
            <Text style={tw`text-4xl font-bold`}>Poste</Text>italiane
          </Text>
          <Text
            style={tw`text-white text-lg font-semibold mt-2 w-full absolute bottom-0`}
          >
            SALDO: <Text style={tw`text-yellow-400 text-lg`}>5.000,00 €</Text>
          </Text>

          {/* LOGO MASTERCARD O VISA */}
          <View style={tw`absolute left-60 top-35`}>
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
