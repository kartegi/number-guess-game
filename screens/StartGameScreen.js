import { Alert, StyleSheet, TextInput, View, Text } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";

import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";

const StartGameScreen = ({ onConfirm }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const handleNumberInputChange = (value) => {
    setEnteredNumber(value);
  };

  const handleResetBtn = () => {
    setEnteredNumber("");
  };

  const handleConfirmBtn = () => {
    const number = parseInt(enteredNumber);

    if (isNaN(number) || number <= 0 || number > 99) {
      Alert.alert(
        "Invalid number",
        "Number has to be a number between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: handleResetBtn }]
      );
      return;
    }
    onConfirm(number);
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Guess Number</Title>
      <Card title={"Enter a number"}>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          value={enteredNumber}
          onChangeText={handleNumberInputChange}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={handleResetBtn} title={"Reset"} />
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={handleConfirmBtn} title={"Confirm"} />
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
