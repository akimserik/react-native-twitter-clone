import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import tweets from "../../data/tweets";
import TweetComponent from "../Tweet";
import { DataStore } from "@aws-amplify/datastore";
import { Tweet } from "../../../src/models";
import styles from "./style";

const Feed = () => {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getTweets = async () => {
    setIsLoading(true);
    const models = await DataStore.query(Tweet);
    console.log(models);
    setTweets(models);
    setIsLoading(false);
  };
  useEffect(() => {
    getTweets();
  }, []);

  if (isLoading) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={{ width: "100%" }}>
      <FlatList
        data={tweets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TweetComponent tweet={item} />}
      />
    </View>
  );
};

export default Feed;
