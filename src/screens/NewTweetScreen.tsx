import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "../components/Themed";
import Colors from "../constants/Colors";
import { RootTabScreenProps } from "../types";

export default function NewTweetScreen({
  navigation,
}: RootTabScreenProps<"Home">) {
  const [tweet, setTweet] = useState("");
  const onTweet = () => {};
  const onClose = () => {
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={onClose}>
          <AntDesign name="close" size={35} color={Colors.light.tint} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onTweet}>
          <Text style={styles.buttonText}>Post</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          multiline
          textAlignVertical="top"
          numberOfLines={20}
          placeholder="write something..."
          value={tweet}
          onChangeText={e => setTweet(e)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    backgroundColor: "white",
  },
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  button: {
    backgroundColor: Colors.light.tint,
    borderRadius: 30,
  },
  buttonText: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  inputContainer: {
    width: "100%",
    padding: 15,
  },
  textInput: {
    fontSize: 20,
  },
});
