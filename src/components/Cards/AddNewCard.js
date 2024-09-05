import { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { AntDesign, FontAwesome } from "react-native-vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Modal from "react-native-modal";
import tw from "twrnc";
import { colors } from "../../../custom-tailwind";

export default function AddNewCard() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isBankListModalVisible, setBankListModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const toggleBankListModal = () => {
    setBankListModalVisible(!isBankListModalVisible);
  };

  const banks = [
    {
      name: "Intesa Sanpaolo",
      icon: require("../../../assets/banks/intesa.png"),
    },
    {
      name: "UniCredit",
      icon: require("../../../assets/banks/unicredit.png"),
    },
    { name: "Credem", icon: require("../../../assets/banks/credem.png") },
    {
      name: "Poste Italiane",
      icon: require("../../../assets/banks/poste-italiane.png"),
    },
    {
      name: "Banca Sella",
      icon: require("../../../assets/banks/sella.png"),
    },
    {
      name: "Banca Mediolanum",
      icon: require("../../../assets/banks/mediolanum.png"),
    },
    {
      name: "Banca BPM",
      icon: require("../../../assets/banks/bpm.png"),
    },
    {
      name: "Monte dei Paschi di Siena",
      icon: require("../../../assets/banks/mps.png"),
    },
    {
      name: "Crédit Agricole",
      icon: require("../../../assets/banks/ca.png"),
    },
    {
      name: "BNL",
      icon: require("../../../assets/banks/bnl.png"),
    },
    {
      name: "Duetsche",
      icon: require("../../../assets/banks/duetsche.png"),
    },
  ];

  return (
    <View style={tw`flex-1 items-center justify-center rounded-xl`}>
      <TouchableOpacity
        onPress={toggleModal}
        style={tw`w-85 h-50 bg-gray-900 p-2 rounded-xl items-center justify-center`}
      >
        <View
          style={tw`bg-blue-500 w-20 h-20 rounded-full items-center justify-center`}
        >
          <AntDesign name="plus" size={40} color="white" />
        </View>
        <Text style={tw`text-white text-lg font-bold mt-3`}>
          Aggiungi un nuovo conto
        </Text>
      </TouchableOpacity>

      {/* MODAL PRINCIPALE */}
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        style={tw`justify-end m-0`}
      >
        <View style={tw`bg-[${colors.primary}] rounded-t-lg h-[80%]`}>
          {/* Header Modal */}
          <View style={tw`flex-row items-center justify-between p-4 `}>
            <Text style={tw`text-lg text-center text-white font-bold`}>
              Aggiungi Conto
            </Text>
            <TouchableOpacity onPress={toggleModal}>
              <AntDesign name="close" size={24} color="white" />
            </TouchableOpacity>
          </View>

          {/* Contenuto della Modale */}
          <View
            style={tw`flex-1 bg-black py-8 px-5`}
          >
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false); // Chiudi la prima modale
                setTimeout(() => {
                  toggleBankListModal(); // Apri la seconda modale dopo un breve delay per assicurare che la prima sia chiusa
                }, 500); // Aggiungi un breve ritardo
              }}
              style={tw`bg-gray-900 w-full h-40 rounded-2xl p-4 flex-row items-center justify-between gap-x-10 mb-5`}
            >
              <View style={tw`flex-1`}>
                <View style={tw`flex-row items-center mb-2`}>
                  <Text style={tw`text-white text-lg font-bold`}>
                    Sincronizza Conto Bancario
                  </Text>
                </View>
                <Text style={tw`text-gray-400 text-xs`}>
                  Aggiungi un nuovo conto bancario facilmente. Inserisci i dati
                  e inizia a monitorare le tue spese.
                </Text>
              </View>
              <MaterialCommunityIcons
                name="bank-plus"
                size={70}
                color="white"
              />
            </TouchableOpacity>

            {/* Altre Opzioni */}
            <TouchableOpacity
              style={tw`bg-gray-900 w-full h-40 rounded-2xl p-4 flex-row items-center justify-between gap-x-10 mb-5`}
            >
              <View style={tw`flex-1`}>
                <View style={tw`flex-row items-center mb-2`}>
                  <Text style={tw`text-white text-lg font-bold`}>
                    Investimenti
                  </Text>
                  <View style={tw`bg-blue-500 rounded-lg p-1 mb-4 ml-2`}>
                    <Text style={tw`text-white text-xs font-bold`}>
                      In arrivo
                    </Text>
                  </View>
                </View>
                <Text style={tw`text-gray-400 text-xs`}>
                  Inizia a investire in criptovalute con il nostro servizio di
                  trading. Scopri le ultime novità, investi in sicurezza.
                </Text>
              </View>
              <FontAwesome6
                name="money-bill-trend-up"
                size={70}
                color="white"
              />
            </TouchableOpacity>

            {/* Altro Opzioni */}
            <TouchableOpacity
              style={tw`bg-gray-900 w-full h-40 rounded-2xl p-4 flex-row items-center justify-between gap-x-10 mb-5`}
            >
              <View style={tw`flex-1`}>
                <View style={tw`flex-row items-center mb-2`}>
                  <Text style={tw`text-white text-lg font-bold`}>
                    Non saprei dirti
                  </Text>
                  <View style={tw`bg-blue-500 rounded-lg p-1 mb-4 ml-2`}>
                    <Text style={tw`text-white text-xs font-bold`}>
                      In arrivo
                    </Text>
                  </View>
                </View>
                <Text style={tw`text-gray-400 text-xs`}>
                  Non so cosa scrivere, ma è un testo di prova. Non so cosa
                  scrivere, ma è un testo di prova.
                </Text>
              </View>
              <FontAwesome6
                name="money-bill-trend-up"
                size={70}
                color="white"
              />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* MODAL LISTA BANCHE */}
      <Modal
        isVisible={isBankListModalVisible}
        onBackdropPress={toggleBankListModal}
        style={tw`justify-end m-0`}
      >
        <View style={tw`bg-black rounded-t-3xl h-[80%]`}>
          <View
            style={tw`bg-[${colors.primary}] rounded-t-3xl flex-row items-center justify-between p-4 `}
          >
            <Text style={tw`text-lg text-center text-white font-bold`}>
              Scegli la tua Banca
            </Text>
            <TouchableOpacity onPress={toggleBankListModal}>
              <AntDesign name="close" size={24} color="white" />
            </TouchableOpacity>
          </View>

          <ScrollView contentContainerStyle={tw`pb-10`} style={tw`mt-5`}>
            {/* Testo Più Popolari */}
            <View style={tw`mb-3`}>
              <Text style={tw`text-start text-white font-bold ml-2`}>
                Più Popolari
              </Text>
            </View>

            {/* Lista delle banche */}
            {banks.map((bank, index) => (
              <TouchableOpacity
                key={index}
                style={tw`flex-row items-center p-5 rounded-2xl bg-[${colors.secondary}] my-2 mx-2`}
              >
                <View style={tw`bg-white rounded-2xl p-2 mr-4`}>
                  <Image
                    source={bank.icon}
                    style={tw`w-10 h-8`}
                    resizeMode="contain"
                  />
                </View>
                <Text style={tw`text-white font-bold text-base`}>
                  {bank.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
}
