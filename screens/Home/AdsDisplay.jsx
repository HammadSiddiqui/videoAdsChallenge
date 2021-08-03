import React from "react";
import {  ScrollView, View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

function AdsDisplay() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.row}>
              <View style={styles.rowItem}>
        </View>
        <View style={styles.rowItem}></View>
          </View>
          <View style={styles.row}>
        <View style={styles.rowItem}></View>
        <View style={styles.rowItem}></View>
          </View>
          <View style={styles.row}>
        <View style={styles.rowItem}></View>
        <View style={styles.rowItem}></View>
          </View>
          <View style={styles.row}>
        <View style={styles.rowItem}></View>
        <View style={styles.rowItem}></View>
          </View>
          <View style={styles.row}>
        <View style={styles.rowItem}></View>
        <View style={styles.rowItem}></View>
      </View>
    </ScrollView>
  );
}
export default AdsDisplay;
const styles = ScaledSheet.create({
    container: {
        padding: '10@s',
    },
    row: {
        height: 200,
        marginBottom: '10@msr',
        flexDirection: 'row',
    },
    rowItem: {
        flex: 1,
        borderWidth: 1,
        margin: '10@s',
    }
})