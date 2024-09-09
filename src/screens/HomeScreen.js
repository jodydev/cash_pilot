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
import AddNewCard from "../components/Cards/AddNewCard";
import LineChart from "../components/Charts/LineChart";
import ProgressChart from "../components/Charts/ProgressChart";
import axios from 'axios';
import { authorize } from "react-native-app-auth"; 
import { useState } from "react";
import { Alert } from "react-native";


export default function HomeScreen() {

  const config = {
    issuer: "https://auth.truelayer-sandbox.com/",
    clientId: "sandbox-cashpilot-b3ec3e",
    redirectUrl: "https://console.truelayer.com/redirect-page", // Assicurati che sia corretto
    scopes: ["info", "accounts", "balance", "transactions"],
    additionalParameters: {},
    serviceConfiguration: {
      authorizationEndpoint: "https://auth.truelayer-sandbox.com/",
      tokenEndpoint: "https://auth.truelayer-sandbox.com/connect/token",
    },
  };

  const [accessToken, setAccessToken] = useState(null);
  const [accountData, setAccountData] = useState(null);

  // Funzione per gestire l'autenticazione con TrueLayer
  const handleLogin = async () => {
    try {
      const result = await authorize(config);
      setAccessToken(result.accessToken);
      console.log("Access Token:", result.accessToken);
      fetchAccountData(result.accessToken);
      console.log("Dati del conto:", accountData);
    } catch (error) {
      console.error("Errore durante l'autenticazione:", error);
      Alert.alert("Errore", "Impossibile connettersi a TrueLayer");
    }
  };

  // Funzione per recuperare i dati del conto bancario
  const fetchAccountData = async (token) => {
    try {
      const response = await fetch(
        "https://api.truelayer-sandbox.com/data/v1/accounts",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      setAccountData(data.results);
      console.log("Dati del conto:", data);
    } catch (error) {
      console.error("Errore nel recupero dei dati del conto:", error);
      Alert.alert("Errore", "Impossibile recuperare i dati del conto");
    }
  };


// const getBalance = async (accessToken, accountId) => {
//   try {
//     const response = await axios.get(
//       `https://api.truelayer-sandbox.com/data/v1/accounts/${accountId}/balance`,
//       {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       }
//     );
//     console.log('Saldo:', response.data);
//   } catch (error) {
//     console.error('Errore nel recupero del saldo:', error);
//   }
// };


// const getTransactions = async (accessToken, accountId) => {
//   try {
//     const response = await axios.get(
//       `https://api.truelayer-sandbox.com/data/v1/accounts/${accountId}/transactions`,
//       {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       }
//     );
//     console.log('Transazioni:', response.data);
//   } catch (error) {
//     console.error('Errore nel recupero delle transazioni:', error);
//   }
// };


return (
  <ScrollView
    showsVerticalScrollIndicator={false}
    showsHorizontalScrollIndicator={false}
    style={tw`flex-1 bg-black`}
  >
    <UserData />

    <View style={tw`flex-1 px-3 mt-5 mb-10`}>
      {/* Scorrimento delle carte */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <PostePayEvolution />
        <XME />
        <CredemDebit />
        <AddNewCard />
      </ScrollView>

      {/* Sezione Informativa */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={tw`my-10`}>

      <View style={tw`w-80 h-40 mr-4 rounded-xl p-3`}>
      {/* Icona e Testo */}
      <View style={tw`flex-row items-center mb-4 `}>
        <View style={tw`w-[30%] h-[90%] rounded-xl items-center justify-center mr-3`}>
        </View>
        {/* Testo */}
        <View style={tw`flex-1`}>
          <Text style={tw`text-white text-xs font-bold mb-1`}></Text>
          <Text style={tw`text-white text-xs`}></Text>
        </View>
      </View>

      {/* Bottone */}
      <TouchableOpacity onPress={handleLogin} style={tw`bg-blue-500 p-2 absolute bottom-3 left-3 w-full rounded-md`} >
        <Text style={tw`text-white text-xs font-bold text-center`}>test</Text>
      </TouchableOpacity>
    </View>

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

        {/* InfoBox aggiornato con il login TrueLayer */}
        <InfoBox
          icon={MaterialCommunityIcons}
          iconName="transit-connection-variant"
          iconColor="bg-green-500"
          bgColor="#1e1e1e"
          title="Connetti i tuoi conti bancari e monitora le tue spese."
          description="Ricevi notifiche in tempo reale, un monitoraggio completo."
          buttonText={accessToken ? "Conti Connessi" : "Connetti Conti"}
          onPress={handleLogin}
        />

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

      {/* Sezione Grafico */}
      <LineChart />

      {/* Sezione Bilancio */}
      <View style={tw`rounded-xl bg-[${colors.secondary}] my-10`}>
        <Text style={tw`text-white text-xl font-bold p-4`}>Bilancio</Text>
        <View style={tw`h-0.5 w-full bg-gray-500`} />

        <View style={tw`flex items-start justify-start p-4`}>
          <Text style={tw`text-gray-500 text-lg uppercase`}>Oggi</Text>
          <View style={tw`flex-row items-center`}>
            <Text style={tw`text-white font-bold text-2xl`}>5.000,00 €</Text>
            <Feather name="trending-up" size={24} color="green" style={tw`mx-2`} />
          </View>
        </View>
        <View style={tw`flex-row items-start justify-end p-4`}>
          <Text style={tw`text-blue-500 text-lg font-bold`}>Scopri di più</Text>
        </View>
      </View>

      <ProgressChart />
    </View>
  </ScrollView>
);
}
