import React from "react";
import Home from "./screens/Home/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FontLoader from "./common/FontLoader";
import AdsDisplay from "./screens/Home/AdsDisplay";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AppLoadingScreen"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#02c39a",
          },
          headerTintColor: "#4C3BB3",
          headerTitleStyle: {
            fontFamily: "Raleway_600SemiBold",
          },
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen name="AppLoadingScreen" component={FontLoader} options={{headerShown: false}}  />
        <Stack.Screen name="Collect Box" component={Home} options={{ headerLeft: () => { }, }} />
        <Stack.Screen name="Watch Ads" component={AdsDisplay} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
