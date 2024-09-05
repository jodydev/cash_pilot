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
import GraficChart from "../components/GraficChart";

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
          <AddNewCard />
        </ScrollView>

        {/**
            BOX INFORMATIVE
          **/}

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={tw`my-10`}
        >
          {/* Box 1 */}
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

        {/**
          GRAFICO
         **/}
        <GraficChart />

        {/* 2 Box che prende tutta la grandezza rimanente */}
        <View style={tw`rounded-xl bg-[${colors.secondary}] my-10`}>
          <Text style={tw`text-white text-xl font-bold p-4`}>Bilancio</Text>
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
          <View style={tw`flex-row items-start justify-end p-4`}>
            <Text style={tw`text-blue-500 text-lg font bold`}>
              Scopri di più
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
