import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

const Card = ({ children, title }) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>{title}</Text>
      {children}
    </View>
  );
};

export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    backgroundColor: Colors.primary800,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  cardTitle: {
    fontFamily: "open-sans",
    color: Colors.primary500,
    fontSize: 24,
  },
});
