import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { colors } from "../../custom-tailwind";
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import tw from "twrnc";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import PostePayEvolution from "../components/Cards/PosteItaliane/PostePayEvolution";
import XME from "../components/Cards/IntesaSanpaolo/XME";
import CredemDebit from "../components/Cards/Credem/CredemDebit";
import InfoBox from "../components/InfoBox";
import UserData from "../components/UserData";

export default function HomeScreen() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      style={tw`flex-1 bg-black`}
    >
    <UserData />

      <View style={tw`flex-1 px-3 mt-5 mb-10`}>
        {/**
            BOX CARTE CREDITO
          **/}

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <PostePayEvolution />
          <XME />
          <CredemDebit />
        </ScrollView>

        {/**
            BOX INFORMATIVE
          **/}

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={tw`my-10`}
        >
          <InfoBox
            icon={Entypo}
            iconName="megaphone"
            iconColor="bg-red-500"
            bgColor="#1e1e1e"
            title="Sblocca i vantaggi di un conto corrente online con la nostra App!"
            description="Non perderti gli ultimi aggiornamenti."
            buttonText="Attiva Notifiche"
            onPress={() => console.log("Notifiche attivate")}
          />

          {/* Box 2 */}
          <InfoBox
            icon={MaterialCommunityIcons}
            iconName="transit-connection-variant"
            iconColor="bg-green-500"
            bgColor="#1e1e1e"
            title="Connetti i tuoi conti bancari e monitora le tue spese."
            description="Ricevi notifiche in tempo reale, un monitoraggio completo."
            buttonText="Connetti Conti"
            onPress={() => console.log("Conti connessi")}
          />

          {/* Box 3 */}
          <InfoBox
            icon={FontAwesome6}
            iconName="bitcoin"
            iconColor="bg-yellow-500"
            bgColor="#1e1e1e"
            title="Inizia a investire in criptovalute con il nostro servizio di trading."
            description="Scopri le ultime novità, investi in sicurezza."
            buttonText="Investi Ora"
            onPress={() => console.log("Investimento iniziato")}
          />
        </ScrollView>

        {/* Box che prende tutta la grandezza rimanente */}
        <View style={tw`rounded-xl bg-[${colors.secondary}]`}>
          <Text style={tw`text-white text-xl font-bold p-4`}>
            Andamento del Bilancio
          </Text>
          <View style={tw`h-0.5 w-full bg-gray-500`} />

          <View style={tw`flex items-start justify-start p-4`}>
            <Text style={tw`text-gray-500 text-lg uppercase`}>Oggi</Text>
            <View style={tw`flex-row items-center`}>
              <Text style={tw`text-white font-bold text-2xl`}>5.000,00 €</Text>
              <Feather
                name="trending-up"
                size={24}
                color="green"
                style={tw`mx-2`}
              />
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
                backgroundColor: "#1c1c1e",
                backgroundGradientFrom: "#1c1c1e",
                backgroundGradientTo: "#1c1c1e",
                decimalPlaces: 2, // Numeri decimali nel grafico
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
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
        <View style={tw`rounded-xl bg-[${colors.secondary}] my-10`}>
          <Text style={tw`text-white text-xl font-bold p-4`}>
            Andamento del Bilancio
          </Text>
          <View style={tw`h-0.5 w-full bg-gray-500`} />

          <View style={tw`flex items-start justify-start p-4`}>
            <Text style={tw`text-gray-500 text-lg uppercase`}>Oggi</Text>
            <View style={tw`flex-row items-center`}>
              <Text style={tw`text-white font-bold text-2xl`}>5.000,00 €</Text>
              <Feather
                name="trending-up"
                size={24}
                color="green"
                style={tw`mx-2`}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1e1e1e", // Colore di sfondo della pagina
  },
  card: {
    width: 320,
    height: 180,
    borderRadius: 10,
    padding: 15,
    position: "relative",
    overflow: "hidden",
    justifyContent: "space-between",
    alignItems: "flex-start",
    elevation: 5, // Ombra per Android
    shadowColor: "#000", // Ombra per iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  cardInfo: {
    flex: 1,
    width: "100%",
  },
  cardLogo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  logoText: {
    color: "#cdaf00",
    fontSize: 22,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  logoSpan: {
    fontSize: 16,
    color: "#fff",
    fontStyle: "normal",
  },
  postamat: {
    position: "absolute",
    right: 0,
    top: 0,
    padding: 5,
  },
  postamatImage: {
    width: 80,
    height: 20,
  },
  cardChip: {
    width: 30,
    height: 20,
    backgroundColor: "#ffeb3b",
    borderRadius: 3,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 10,
    top: 30,
  },
  chipIcon: {
    width: 20,
    height: 20,
  },
  cardType: {
    color: "#8a8383",
    fontSize: 16,
    alignSelf: "flex-end",
  },
  typeSpan: {
    fontSize: 20,
  },
  cardNumber: {
    fontSize: 20,
    letterSpacing: 2,
    marginVertical: 10,
  },
  digitGroup: {
    fontFamily: "Courier Prime",
    color: "#afa7a7",
  },
  validThru: {
    fontSize: 12,
    color: "#fff",
    textAlign: "right",
  },
  expDate: {
    fontSize: 18,
    color: "#fff",
  },
  cardName: {
    fontSize: 14,
    color: "#fff",
    marginTop: 10,
    width: "90%",
  },
  cardVendor: {
    position: "absolute",
    bottom: 10,
    right: 10,
    width: 50,
    height: 30,
  },
  vendorSr: {
    color: "#fff",
    position: "absolute",
    width: 1,
    height: 1,
    overflow: "hidden",
  },
});
