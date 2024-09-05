import { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import tw from "twrnc";
import { colors } from "../../custom-tailwind";
import Carousel from "react-native-reanimated-carousel";

export default function CarouselScreen({ navigation }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { width, height } = Dimensions.get("window");

  const slides = [
    {
      id: 1,
      title: "Le tue finanze in un posto",
      description: "Ottieni una panoramica completa delle tue finanze, tutto in un unico posto.",
      image: require("../../assets/img/carousel/carousel1.png"),
    },
    {
      id: 2,
      title: "Connetti la tua Banca",
      description: "Connessione sicura con la tua banca per un'esperienza personalizzata. Aggiorna automaticamente le tue transazioni.",
      image: require("../../assets/img/carousel/carousel2.png"),
    },
    {
      id: 3,
      title: "Traccia le tue spese",
      description: "Tieni traccia delle tue spese immediatamente e in modo semplice. Ricevi notifiche in tempo reale.",
      image: require("../../assets/img/carousel/carousel3.png"),
    },
    {
      id: 4,
      title: "Il tuo bugdet personale",
      description: "Crea un budget personalizzato e ricevi notifiche quando stai per superarlo. Risparmia per ciò che conta.",
      image: require("../../assets/img/carousel/carousel4.png"),
    },
  ];

  const handleSnapToItem = (index) => {
    setCurrentIndex(index);
    console.log("current index:", index);
  };

  return (
    <View style={tw`flex-1`}>
      <Carousel
        width={width}
        height={height}
        autoPlay={false}
        data={slides}
        scrollAnimationDuration={1000}
        onSnapToItem={handleSnapToItem}
        loop={false}
        renderItem={({ index }) => (
          <ImageBackground
            source={require("../../assets/img/bg.png")}
            style={tw`flex-1 bg-[${colors.background}]`}
            resizeMode="cover"
          >
            <View style={tw`flex-1 justify-center items-center mb-10 px-10`}>
              <TouchableOpacity
                style={tw`absolute top-15 right-3 p-1`}
                onPress={() => navigation.navigate('RegisterScreen')}
              >
                <Text style={tw`text-[${colors.primary}] underline text-base`}>Salta</Text>
              </TouchableOpacity>
              <Image
                source={slides[index].image}
                style={tw`w-[100%] h-[300px]`}
                resizeMode="contain"
              />
              <Text
                style={tw`text-center text-white text-4xl font-bold mt-8 mb-4`}
              >
                {slides[index].title}
              </Text>
              <Text style={tw`text-center text-white text-lg`}>
                {slides[index].description}
              </Text>
            </View>
          </ImageBackground>
        )}
      />

      {/* Indicatore di progresso */}
      <View style={tw`absolute bottom-10 w-full flex-row justify-center`}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={tw`w-2.5 h-2.5 rounded-full ${
              index === currentIndex ? `bg-[${colors.primary}]` : "bg-gray-400"
            } mx-1`}
          />
        ))}
      </View>

      {/* Pulsante per proseguire */}
      {currentIndex === slides.length - 1 && (
        <View style={tw`w-full px-10 flex items-center justify-center mb-8`}>
          <TouchableOpacity
            style={tw`bg-[${colors.primary}] w-full py-2 px-4 rounded-full`}
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            <Text
              style={[
                tw`text-[${colors.textPrimary}] font-bold text-lg text-center`,
              ]}
            >
              Inizia Ora
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
