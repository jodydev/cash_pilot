import React from "react";
import { Dimensions } from "react-native";
import { ProgressChart } from "react-native-chart-kit";
import { colors } from "../../../custom-tailwind";
import { View } from "react-native";
import tw from "twrnc";

const screenWidth = Dimensions.get("window").width;

const chartConfig = {
  backgroundGradientFrom: "#1c1c1e", // Imposta il colore di sfondo
  backgroundGradientTo: "#1c1c1e",   // Colore solido per lo sfondo
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,  // Linee nere
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,  // Etichette bianche
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};

export default function ProgressCharts() {
  const data = {
    labels: ["Casa", "Auto", "Intrattenimento", "Ristoranti", "Benessere"],
    data: [0.4, 0.6, 0.8, 0.2, 0.3],
  };

  return (
    <View style={tw`rounded-xl bg-[${colors.secondary}] p-4`}>
      <View style={tw`rounded-lg items-center justify-center`}>
        <ProgressChart
          data={data}
          width={screenWidth * 0.9}  // Usa il 90% della larghezza dello schermo
          height={200}  // Altezza massima del grafico
          strokeWidth={12}  // Spessore delle linee
          radius={30}  // Dimensione del raggio
          chartConfig={chartConfig}
          hideLegend={false}  // Mostra la legenda
        />
      </View>
    </View>
  );
}