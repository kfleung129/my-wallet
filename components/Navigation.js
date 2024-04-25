import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ backgroundColor: '#202020', height: '100%' }}>
      <View style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between', 
        gap: '10%',
        
      }}>
        <TouchableOpacity 
          onPress={() => [navigation.navigate("Contact")]}
        >
          <Text style={{ color: 'white', fontSize: '20%' }}>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => [navigation.navigate("Cart")]}
        >
          <Text style={{ color: 'white', fontSize: '20%' }}>Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
