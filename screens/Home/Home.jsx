import React from "react";
import {
  ImageBackground,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
function Home() {
  const navigation = useNavigation();
  const onCheckoutRewards = () => {
    return navigation.navigate("Watch Ads");
  };
  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <ImageBackground
          source={require("../../assets/images/heroImage.png")}
          style={styles.bgStyles}
        >
          <View style={styles.checkOutButton}>
            <TouchableOpacity>
              <Pressable onPress={onCheckoutRewards} style={styles.button}>
                <Text style={styles.buttonText}> Check Out Rewards</Text>
              </Pressable>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.stats}>
        <LinearGradient
          // Background Linear Gradient
          colors={["#a89fdf", "#4939ad"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.linearGradStyles}
        />
        <ImageBackground
          source={require("../../assets/images/giftbox.png")}
          style={styles.bgStyles}
          resizeMode="stretch"
        >
          <View style={styles.top}>
            <View style={styles.boxes}>
              <Text style={styles.amounta}>$109</Text>
              <Text
                style={{
                  color: "black",
                  textAlign: "center",
                  fontFamily: "Raleway_600SemiBold",
                }}
              >
                Total Rewards Earned
              </Text>
            </View>
            <View style={styles.boxes}>
              <Text style={styles.amounta}>$39</Text>
              <Text
                style={{
                  color: "black",
                  textAlign: "center",
                  fontFamily: "Raleway_600SemiBold",
                }}
              >
                Payout Pending
              </Text>
            </View>
          </View>
          <View style={styles.bottom}>
            <View style={styles.boxes}>
              <Text style={styles.amounta}>$45</Text>
              <Text
                style={{
                  color: "black",
                  textAlign: "center",
                  fontFamily: "Raleway_600SemiBold",
                }}
              >
                Bonus Received
              </Text>
            </View>
            <View style={styles.boxes}>
              <Text style={styles.amounta}>$22</Text>
              <Text
                style={{
                  color: "black",
                  textAlign: "center",
                  fontFamily: "Raleway_600SemiBold",
                }}
              >
                Rewards Missed
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}
const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBF2FB",
  },
  boxes: {
    color: "black",
    fontFamily: "Raleway_600SemiBold",
    fontSize: "16@msr",
    marginBottom: "10@msr",
    padding: "10@msr",
    borderColor: "gray",
    borderRadius: "20@msr",
    backgroundColor: "#ffffffC9",
    width: "100@s",
    height: "100@vs",
  },
  hero: {
    height: "300@vs",
  },
  stats: {
    marginTop: "-50@msr",
    flexGrow: 1,
    justifyContent: "space-evenly",
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  amounta: {
    fontSize: "24@s",
    textAlign: "center",
    fontFamily: "Raleway_600SemiBold",
  },
  bgStyles: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 59,
    backgroundColor: "#ff76a4",
    alignSelf: "center",
  },
  buttonText: {
    color: "#4C3BB3",
    fontFamily: "Raleway_900Black",
    fontSize: "16@s",
  },
  linearGradStyles: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    flex: 1,
    height: "300@vs",
    borderTopLeftRadius: "72@s",
    borderTopRightRadius: "69@s",
  },
});
export default Home;
