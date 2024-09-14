import { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
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
import { colors } from "../../custom-tailwind";

// Dati per Salt Edge
const SALT_EDGE_URL = 'https://www.saltedge.com/api/v5';
const CLIENT_ID = 'k32PvQB6Nmzia7-aI0fbidbNOoAqyJCLq3uxizUhfd8';
const CLIENT_SECRET = 'f5IkEyldnHd_cJ5afw57A_nJO1e0M_CmlXF_7yc9-_w';
const CUSTOMER_ID = "222222222222222222";

// Funzione per effettuare richieste HTTP
async function request(url, options = {}) {
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'App-id': CLIENT_ID,
        'Secret': CLIENT_SECRET,
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error_message || 'Unknown error');
    }
    return data;
  } catch (error) {
    console.error('Request Error:', error);
    throw error;
  }
}

export default function HomeScreen() {
  const [balance, setBalance] = useState(null);
  const [connectUrl, setConnectUrl] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Solo se necessario, altrimenti rimuovi questa chiamata
    authenticate();
  }, []);
  
  // Funzione per autenticare l'utente
  async function authenticate() {
    try {
      const response = await request(`${SALT_EDGE_URL}/connect_sessions/create`, {
        method: "POST",
        body: JSON.stringify({
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
        }),
      });
  
      console.log('Authenticated:', response);
    } catch (err) {
      console.error('Authentication Error:', err);
      setError("Errore di autenticazione");
    }
  }

  // Funzione per creare la connessione e ottenere l'URL del widget
  async function createConnection() {
    try {
      const response = await request(`${SALT_EDGE_URL}/connect_sessions/create`, {
        method: "POST",
        body: JSON.stringify({
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
          country_code: 'IT',
          provider_code: 'your_bank_code',  // Sostituisci con il codice della tua banca
        }),
      });

      setConnectUrl(response.data.connect_url);
      if (response.data.connection_id) {
        await getBalances(response.data.connection_id); // Ottieni il saldo dopo la connessione
      } else {
        setError("ID connessione mancante");
      }
    } catch (err) {
      console.error('Connection Error:', err);
      setError("Errore di connessione con la banca");
    }
  }

  // Funzione per ottenere il saldo
  async function getBalances(connection_id) {
    try {
      const response = await request(`${SALT_EDGE_URL}/accounts`, {
        method: "GET",
        headers: {
          'Connection-id': connection_id,
        },
      });

      if (response.accounts && response.accounts.length > 0) {
        setBalance(response.accounts[0].balance); // Memorizza il saldo del primo conto
      } else {
        setError("Nessun conto trovato");
      }
    } catch (err) {
      console.error('Balance Error:', err);
      setError("Errore nel recupero del saldo");
    }
  }

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

        {/* Bottone per ottenere il saldo */}
        <View style={tw`w-80 h-40 mr-4 rounded-xl p-3`}>
          <TouchableOpacity
            style={tw`bg-blue-500 p-2 w-full rounded-md`}
            onPress={createConnection}
          >
            <Text style={tw`text-white text-center`}>Get Balance</Text>
          </TouchableOpacity>
          {balance !== null && <Text style={tw`text-white text-center mt-2`}>Balance: {balance} €</Text>}
          {error && <Text style={tw`text-red-500 text-center mt-2`}>{error}</Text>}
        </View>

        {/* Sezione Informativa */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={tw`my-10`}>
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

          <InfoBox
            icon={MaterialCommunityIcons}
            iconName="transit-connection-variant"
            iconColor="bg-green-500"
            bgColor="#1e1e1e"
            title="Connetti i tuoi conti bancari e monitora le tue spese."
            description="Ricevi notifiche in tempo reale, un monitoraggio completo."
            buttonText="Connetti Conti"
            onPress={createConnection} // Usa createConnection qui
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