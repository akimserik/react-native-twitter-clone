import React from "react";
import { Image, Text, View } from "react-native";
import { TweetType } from "../../../types";

export type MainContainerProps = {
  tweet: TweetType;
};

const MainContainer = ({ tweet }: MainContainerProps) => (
  <View>
    <View>
      <Text>{tweet.user.name}</Text>
      <Text>{tweet.user.username}</Text>
      <Text>{tweet.createdAt}</Text>
    </View>
    <View>
      <Text>{tweet.content}</Text>
      <Image
        source={{ uri: tweet.image }}
        style={{ width: 100, height: 100 }}
      />
    </View>
  </View>
);

export default MainContainer;
