import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

const NewTweetButton = () => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("NewTweet");
  };

  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <FontAwesome name="pencil-square-o" size={30} color={"white"} />
    </TouchableOpacity>
  );
};

export default NewTweetButton;
