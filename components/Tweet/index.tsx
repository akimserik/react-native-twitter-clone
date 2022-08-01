import React from "react";
import { View } from "react-native";
import { TweetType } from "../../types";
import LeftContainer from "./LeftContainer";
import MainContainer from "./MainContainer";

export type TweetProps = {
  tweet: TweetType;
};

const Tweet = ({ tweet }: TweetProps) => (
  <View>
    <LeftContainer user={tweet.user} />
    <MainContainer tweet={tweet} />
  </View>
);

export default Tweet;
