import React, { useEffect } from "react";

//Third party imports
import { useNavigation } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import {
    useFonts,
    Raleway_100Thin,
    Raleway_200ExtraLight,
    Raleway_300Light,
    Raleway_400Regular,
    Raleway_500Medium,
    Raleway_600SemiBold,
    Raleway_700Bold,
    Raleway_800ExtraBold,
    Raleway_900Black,
    Raleway_100Thin_Italic,
    Raleway_200ExtraLight_Italic,
    Raleway_300Light_Italic,
    Raleway_400Regular_Italic,
    Raleway_500Medium_Italic,
    Raleway_600SemiBold_Italic,
    Raleway_700Bold_Italic,
    Raleway_800ExtraBold_Italic,
    Raleway_900Black_Italic,
  } from '@expo-google-fonts/raleway';


//This shows the AppLoading indicator until the custom fonts are loaded
export default function FontLoader() {
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    Raleway_100Thin,
    Raleway_200ExtraLight,
    Raleway_300Light,
    Raleway_400Regular,
    Raleway_500Medium,
    Raleway_600SemiBold,
    Raleway_700Bold,
    Raleway_800ExtraBold,
    Raleway_900Black,
    Raleway_100Thin_Italic,
    Raleway_200ExtraLight_Italic,
    Raleway_300Light_Italic,
    Raleway_400Regular_Italic,
    Raleway_500Medium_Italic,
    Raleway_600SemiBold_Italic,
    Raleway_700Bold_Italic,
    Raleway_800ExtraBold_Italic,
    Raleway_900Black_Italic,
  });
  let goToHome = async () => {
    return navigation.navigate("Collect Box");
  };
  let showAppLoading = async () => {
    return <AppLoading onError={console.warn} />;
  };
  useEffect(() => {
    fontsLoaded ? goToHome() : showAppLoading();
    return () => null;
  }, [fontsLoaded]);
  return null;
}
