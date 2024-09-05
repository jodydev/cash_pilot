import { View, Text } from 'react-native';
import tw from 'twrnc';

export default function ErrorScreen({ errorMsg }) {
  return (
    <View style={tw`flex-1 items-center justify-center bg-black`}>
      <Text style={tw`text-white text-3xl`}>{ errorMsg }</Text>
    </View>
  );
};