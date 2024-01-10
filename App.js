import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import Discover from "./screens/Discover";
import ItemScreen from "./screens/ItemScreen";
import RegistationScreen from "./screens/RegistrationScreen";
import HomePage from "./screens/HomePage";
import StorePage from "./screens/StorePage";
import ProfilePage from "./screens/ProfilePage";
import MapsScreen from "./screens/MapsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Registration" component={RegistationScreen} />
          <Stack.Screen name="Discover" component={Discover} />
          <Stack.Screen name="ItemScreen" component={ItemScreen} />
          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name="StorePage" component={StorePage}/>
          <Stack.Screen name="ProfilePage" component={ProfilePage} />
          <Stack.Screen name="MapsScreen" component={MapsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}
