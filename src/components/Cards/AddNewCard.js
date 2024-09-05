import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign, FontAwesome } from "react-native-vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Modal from "react-native-modal";
import tw from "twrnc";
import { colors } from "../../../custom-tailwind";

export default function AddNewCard() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

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

      {/* MODAL */}
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        style={tw`justify-end m-0`}
      >
        <View style={tw`bg-[${colors.primary}] rounded-t-lg h-[80%]`}>
          {/* 1 BOX ADD CARD */}
          <View style={tw`flex-row items-center justify-between p-4 `}>
            <Text style={tw`text-lg text-center text-white font-bold`}>
              Aggiungi Conto
            </Text>
            <TouchableOpacity onPress={toggleModal}>
              <AntDesign name="close" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <View
            style={tw`flex-1 items-center justify-start bg-black py-8 px-5`}
          >
            <TouchableOpacity
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

            {/* 2 BOX ADD CARD */}

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

            {/* 3 BOX ADD CARD */}

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
    </View>
  );
}
