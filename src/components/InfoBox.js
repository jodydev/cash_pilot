import { View, Text, TouchableOpacity, Alert } from 'react-native';
import * as Notifications from 'expo-notifications';
import tw from 'twrnc';

export default function InfoBox({ icon, iconName, iconColor, bgColor, title, description, buttonText, onPress }) {
  const IconComponent = icon;

  const requestPermission = async () => {
    try {
      // Richiedi permesso per le notifiche
      const { status } = await Notifications.requestPermissionsAsync();

      if (status === 'granted') {
        Alert.alert('Permesso per le notifiche concesso');
      } else {
        Alert.alert('Permesso per le notifiche negato');
      }
    } catch (error) {
      console.error('Errore nella richiesta di permesso:', error);
      Alert.alert('Errore nella richiesta di permesso');
    }
  };
  return (
    <View style={tw`w-80 h-40 bg-[${bgColor}] mr-4 rounded-xl p-3`}>
      {/* Icona e Testo */}
      <View style={tw`flex-row items-center mb-4 `}>
        <View style={tw`w-[30%] h-[90%] ${iconColor} rounded-xl items-center justify-center mr-3`}>
          <IconComponent name={iconName} size={40} color="white" />
        </View>
        {/* Testo */}
        <View style={tw`flex-1`}>
          <Text style={tw`text-white text-xs font-bold mb-1`}>{title}</Text>
          <Text style={tw`text-white text-xs`}>{description}</Text>
        </View>
      </View>

      {/* Bottone */}
      <TouchableOpacity onPress={requestPermission} style={tw`bg-blue-500 p-2 absolute bottom-3 left-3 w-full rounded-md`} >
        <Text style={tw`text-white text-xs font-bold text-center`}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
}