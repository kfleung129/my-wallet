import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import AddTransactionScreen from './components/AddTransactionScreen';

const Stack = createNativeStackNavigator();

function Home () {
  return (
    <View>
      <Text>Hello World!</Text>
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerBackTitle: "",
          headerStyle: {
            alignItems: 'start',
          },
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}>
        <Stack.Screen component={HomeScreen} name="HomeScreen" options={{ title: "Transaction History", headerBackTitleVisible: false }} />
        <Stack.Screen component={AddTransactionScreen} name="AddTransaction" options={{ title: "Transaction - Add", headerBackTitleVisible: false }} />
        <Stack.Screen component={Home} name="Contact" options={{ title: "Contact Us" }} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
