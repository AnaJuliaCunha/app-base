import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePageScreen from "../screens/HomePageScreen";
import MundoPageScreen from "../screens/MundoPageScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="HomeScreen"
                    component={HomePageScreen}
                    options={{
                        title: "Minha página inicial sobre notícias",
                        headerShown: false,
                    }} />
                <Stack.Screen
                    name="MundoPageScreen"
                    component={MundoPageScreen}
                    options={{
                        title: "Mundo",
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}