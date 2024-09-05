import { View, Text, Image, ImageBackground } from "react-native";
import tw from "twrnc";

export default function AddNewCard() {

  return (
    <View style={tw`flex-1 bg-gray-900 rounded-2xl mr-4`}>
      <View style={[tw`w-85 h-50 rounded-lg relative`, { overflow: "hidden" }]}>
        <ImageBackground
          source={require("../../../../assets/cards/cover-credem-card.png")}
          style={[
            tw`w-100 h-65 rounded-lg py-3 px-4 relative`,
            { overflow: "hidden" },
          ]}
        >
          <View style={tw`flex-1 w-full relative`}>
            <View style={tw`flex-row items-center mb-2 relative`}>
              <View style={tw`absolute left-0 top-0 p-1`}>
                <Image
                  source={require("../../../../assets/cards/credem-logo.png")}
                  style={tw`w-24 h-12`}
                />
              </View>
              <View style={tw`absolute right-15 top-0 flex-col`}>
                <Text style={tw`text-white text-lg font-semibold italic`}>
                  Credemcard
                </Text>
                <Text
                  style={tw`text-white text-lg right-0 top-4 absolute font-base italic`}
                >
                  debit
                </Text>
              </View>
            </View>

            <View style={tw`absolute left-1 top-20`}>
              <Image
                source={require("../../../../assets/cards/chip-grey.png")}
                style={tw`w-20 h-10`}
              />
            </View>

            <View style={tw`absolute right-15 top-30`}>
              <Image
                source={require("../../../../assets/cards/pago3.png")}
                style={tw`w-16 h-10`}
              />
            </View>

            <Text
              style={tw`text-white text-lg font-semibold mt-2 w-full absolute bottom-15`}
            >
              SALDO: <Text style={tw`text-yellow-400 text-lg`}>5.000,00 €</Text>
            </Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}
