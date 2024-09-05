import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import tw from 'twrnc';
import { colors } from '../../custom-tailwind';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={tw`flex-1 justify-center items-center bg-[${colors.background}] p-6`}>
      {/* Bottone di navigazione in alto a sinistra */}
      <TouchableOpacity
        style={tw`bg-black rounded-full absolute top-15 left-3 p-2`}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={require("../../assets/icons/nav-back.png")}
          style={tw`w-8 h-8`}
          resizeMode="contain"
        />
      </TouchableOpacity>
      {/* Logo */}
      <Image
        source={require('../../assets/img/logo.png')}
        style={tw`w-40 h-40 mb-10 absolute top-5`}
        resizeMode="contain"
      />

      {/* Testo descrittivo */}
      <Text style={tw`text-[${colors.primary}] text-2xl font-bold mb-6 text-center`}>
        Accedi al tuo account
      </Text>

      {/* Campo Email */}
      <TextInput
        style={tw`w-full p-4 bg-gray-100 rounded-lg mb-4`}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Campo Password */}
      <TextInput
        style={tw`w-full p-4 bg-gray-100 rounded-lg mb-6`}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
      />

      {/* Bottone di Accesso */}
      <TouchableOpacity
        style={tw`w-full py-4 bg-[${colors.primary}] rounded-full`}
        onPress={() => navigation.navigate('HomeScreen')} // Puoi cambiare la destinazione a seconda della tua configurazione
      >
        <Text style={tw`text-[${colors.textPrimary}] font-bold text-lg text-center`}>
          Accedi
        </Text>
      </TouchableOpacity>

    </View>
  );
}