import React from "react";
import { Text, View } from "react-native";
import {Tweet} from "../../src/models";
import { TweetType } from "../../types";
import LeftContainer from "./LeftContainer";
import MainContainer from "./MainContainer";
import styles from "./styles";

export type TweetProps = {
  tweet: Tweet;
};

const TweetComponent = ({ tweet }: TweetProps) =>
  tweet?.content ? (
    <View style={styles.container}>
      <LeftContainer user={tweet.User} />
      <MainContainer tweet={tweet} />
    </View>
  ) : (
    <Text>{"No tweets"}</Text>
  );

export default TweetComponent;
