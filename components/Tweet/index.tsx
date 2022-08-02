import React from "react";
import { Text, View } from "react-native";
import { TweetType } from "../../types";
import LeftContainer from "./LeftContainer";
import MainContainer from "./MainContainer";
import styles from "./styles";

export type TweetProps = {
  tweet: TweetType;
};

const Tweet = ({ tweet }: TweetProps) =>
  tweet?.content ? (
    <View style={styles.container}>
      <LeftContainer user={tweet.user} />
      <MainContainer tweet={tweet} />
    </View>
  ) : (
    <Text>{"No tweets"}</Text>
  );

export default Tweet;
