import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import Feather from "@expo/vector-icons/Feather";
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import tw from "twrnc";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require("../../assets/img/bg.png")}
      style={tw`flex-1 bg-red-500`}
      resizeMode="cover"
    >
      <ScrollView style={tw`flex-1`}>
        <View style={tw`flex-1 px-5 mt-30`}>
          <View style={tw`flex-row justify-between mb-4`}>
            {/* box CONTANTI */}

            <View style={tw`w-[48%] h-24 bg-gray-800 rounded-xl`}>
              <View style={tw`flex-col justify-center items-start p-3`}>
                <View
                  style={tw`w-6 h-6 items-center justify-center bg-cyan-500 rounded-md`}
                >
                  <FontAwesome6 name="coins" size={15} color="white" />
                </View>

                <Text style={tw`text-gray-400 text-xs mt-2 uppercase`}>
                  Contanti
                </Text>
                <Text style={tw`text-white font-bold text-lg`}>1.000,00 €</Text>
              </View>
            </View>
            {/* box BANK 1 */}

            <View style={tw`w-[48%] h-24 bg-gray-800 rounded-xl`}>
              <View style={tw`flex-col justify-center items-start p-3`}>
                <View
                  style={tw`w-6 h-6 items-center justify-center bg-green-500 rounded-md`}
                >
                  <Image
                    source={require("../../assets/icons/bank.png")}
                    style={tw`w-4 h-4`}
                  />
                </View>

                <Text style={tw`text-gray-400 text-xs mt-2 uppercase`}>
                  Intesa San Paolo
                </Text>
                <Text style={tw`text-white font-bold text-lg`}>1.000,00 €</Text>
              </View>
            </View>
          </View>
          <View style={tw`flex-row justify-between mb-4`}>
            {/* box BANK 2 */}

            <View style={tw`w-[48%] h-24 bg-gray-800 rounded-xl`}>
              <View style={tw`flex-col justify-center items-start p-3`}>
                <View
                  style={tw`w-6 h-6 items-center justify-center bg-yellow-500 rounded-md`}
                >
                  <Image
                    source={require("../../assets/icons/bank.png")}
                    style={tw`w-4 h-4`}
                  />
                </View>

                <Text style={tw`text-gray-400 text-xs mt-2 uppercase`}>
                  PostePay
                </Text>
                <Text style={tw`text-white font-bold text-lg`}>1.000,00 €</Text>
              </View>
            </View>

            {/* box ADD ACCOUNT */}
            <View style={tw`w-[48%] h-24 bg-gray-800 rounded-xl`}>
              <View style={tw`flex-col justify-center items-center`}>
                <View
                  style={tw`w-8 h-8 mt-6 items-center justify-center bg-blue-500 rounded-full`}
                >
                  <Icon name="add" size={25} color="white" />
                </View>
                <Text style={tw`text-white mt-1 text-xs`}>
                  Aggiungi Account
                </Text>
              </View>
            </View>
          </View>

          {/* 3 box con overflow x scroll */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={tw`my-10`}
          >
            <View style={tw`w-80 h-40 bg-gray-800 mr-4 rounded-xl p-3`}>
              {/* Icona e Testo */}
              <View style={tw`flex-row items-center mb-4 `}>
                <View
                  style={tw`w-[30%] h-[90%] bg-red-500 rounded-xl items-center justify-center mr-3`}
                >
                  <Entypo name="megaphone" size={40} color="white" />
                </View>
                {/* Testo */}
                <View style={tw`flex-1`}>
                  <Text style={tw`text-white text-xs font-bold mb-1`}>
                    Sblocca i vantaggi di un conto corrente online con la nostra
                    App!
                  </Text>
                  <Text style={tw`text-white text-xs`}>
                    Non perderti gli ultimi aggiornamenti.
                  </Text>
                </View>
              </View>

              {/* Bottone */}
              <TouchableOpacity
                style={tw`bg-blue-500 p-2 absolute bottom-3 left-3 w-full rounded-md`}
              >
                <Text style={tw`text-white text-xs font-bold text-center`}>
                  Attiva Notifiche
                </Text>
              </TouchableOpacity>
            </View>

            {/* Box 2 */}
            <View style={tw`w-80 h-40 bg-gray-800 mr-4 rounded-xl p-3`}>
              {/* Icona e Testo */}
              <View style={tw`flex-row items-center mb-4 `}>
                <View
                  style={tw`w-[30%] h-[90%] bg-green-500 rounded-xl items-center justify-center mr-3`}
                >
                  <MaterialCommunityIcons
                    name="transit-connection-variant"
                    size={40}
                    color="white"
                  />
                </View>
                {/* Testo */}
                <View style={tw`flex-1`}>
                  <Text style={tw`text-white text-xs font-bold mb-1`}>
                    Conneti i tuoi conti bancari e monitora le tue spese.
                  </Text>
                  <Text style={tw`text-white text-xs`}>
                    Ricevi notifiche in tempo reale, un monitoraggio completo.
                  </Text>
                </View>
              </View>

              {/* Bottone */}
              <TouchableOpacity
                style={tw`bg-blue-500 p-2 absolute bottom-3 left-3 w-full rounded-md`}
              >
                <Text style={tw`text-white text-xs font-bold text-center`}>
                  Connetti Conti
                </Text>
              </TouchableOpacity>
            </View>

            {/* Box 3 */}
            <View style={tw`w-80 h-40 bg-gray-800 rounded-xl p-3`}>
              {/* Icona e Testo */}
              <View style={tw`flex-row items-center mb-4 `}>
                <View
                  style={tw`w-[30%] h-[90%] bg-yellow-500 rounded-xl items-center justify-center mr-3`}
                >
                  <FontAwesome6 name="bitcoin" size={40} color="black" />
                </View>
                {/* Testo */}
                <View style={tw`flex-1`}>
                  <Text style={tw`text-white font-bold text-xs mb-1`}>
                    Inizia a investire in criptovalute con il nostro servizio di
                    trading.
                  </Text>
                  <Text style={tw`text-white text-xs`}>
                    Scopri le ultime novità, investi in sicurezza.
                  </Text>
                </View>
              </View>

              {/* Bottone */}
              <TouchableOpacity
                style={tw`bg-blue-500 p-2 absolute bottom-3 left-3 w-full rounded-md`}
              >
                <Text style={tw`text-white text-xs font-bold text-center`}>
                  Investi Ora
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>

          {/* Box che prende tutta la grandezza rimanente */}
          <View style={tw`rounded-xl bg-[#111827]`}>
            <Text style={tw`text-white text-xl font-bold p-4`}>
              Andamento del Bilancio
            </Text>
            <View
              style={tw`h-0.5 w-full bg-gray-800`}
            />

            <View style={tw`flex items-start justify-start p-4`}>
              <Text style={tw`text-gray-500 text-lg uppercase`}>Oggi</Text>
              <View style={tw`flex-row items-center`}>
                <Text style={tw`text-white font-bold text-2xl`}>
                  5.000,00 €
                </Text>
                <Feather name="trending-up" size={24} color="green"  style={tw`mx-2`}/>
              </View>
            </View>

            <View style={tw`p-6`}>
              <LineChart
                data={{
                  labels: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu"],
                  datasets: [
                    {
                      data: [20, 45, 28, 80, 99, 43],
                    },
                  ],
                }}
                width={Dimensions.get("window").width - 100} // Larghezza del grafico, ridotta per il padding
                height={200} // Altezza del grafico
                yAxisLabel="€"
                yAxisSuffix="k"
                chartConfig={{
                  backgroundColor: "#111827",
                  backgroundGradientFrom: "#111827",
                  backgroundGradientTo: "#111827",
                  decimalPlaces: 2, // Numeri decimali nel grafico
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  labelColor: (opacity = 1) =>
                    `rgba(255, 255, 255, ${opacity})`,
                  style: {
                    borderRadius: 16,
                    padding: 10, // Aggiunta di padding interno al grafico
                  },
                  propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#ffa726",
                  },
                }}
                bezier // Opzionale, per rendere le linee del grafico più curve
                style={{
                  borderRadius: 16,
                }}
              />
            </View>
          </View>

          {/* 2 Box che prende tutta la grandezza rimanente */}
          <View style={tw`rounded-xl bg-[#111827] my-10`}>
            <Text style={tw`text-white text-xl font-bold p-4`}>
              Andamento del Bilancio
            </Text>
            <View
              style={tw`h-0.5 w-full bg-gray-800`}
            />

            <View style={tw`flex items-start justify-start p-4`}>
              <Text style={tw`text-gray-500 text-lg uppercase`}>Oggi</Text>
              <View style={tw`flex-row items-center`}>
                <Text style={tw`text-white font-bold text-2xl`}>
                  5.000,00 €
                </Text>
                <Feather name="trending-up" size={24} color="green"  style={tw`mx-2`}/>
              </View>
            </View>

            
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
