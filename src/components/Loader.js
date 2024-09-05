import { View, ActivityIndicator } from "react-native";
import tw from "twrnc";

export default function Loader() {
  return (
    <View style={tw`flex-1 items-center justify-center bg-black`}>
      <ActivityIndicator size="large" color="#1c1c1e" />
    </View>
  );
}