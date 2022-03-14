import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/Home";
import ProgramScreen from "./src/screens/ProgramScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"HomeScreen"}
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
        }}
      >
        <Stack.Screen name={"HomeScreen"} component={HomeScreen} />
        <Stack.Screen name={"ProgramScreen"} component={ProgramScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
