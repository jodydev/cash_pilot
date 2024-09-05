import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

export default function InfoBox({ icon, iconName, iconColor, bgColor, title, description, buttonText, onPress }) {
  const IconComponent = icon;

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
      <TouchableOpacity style={tw`bg-blue-500 p-2 absolute bottom-3 left-3 w-full rounded-md`} onPress={onPress}>
        <Text style={tw`text-white text-xs font-bold text-center`}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
}