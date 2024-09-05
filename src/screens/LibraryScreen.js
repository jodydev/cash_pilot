import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

export default function LibraryScreen() {
  return (
    <View style={tw`bg-gray-900 flex-1 p-4`}>
      <Text style={tw`text-white text-2xl`}>La tua libreria</Text>
    </View>
  );
}