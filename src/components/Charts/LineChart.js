import React from "react";
import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { colors } from "../../../custom-tailwind";
import { View, Text } from "react-native";
import tw from "twrnc";
import Feather from "react-native-vector-icons/Feather";

export default function LineCharts() {
  return (
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
            labels: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago"],
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
  );
}
