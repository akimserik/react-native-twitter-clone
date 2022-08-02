import React from "react";
import { FlatList, View } from "react-native";
import tweets from "../../data/tweets";
import Tweet from "../Tweet";

const Feed = () => (
  <View style={{ width: "100%" }}>
    <FlatList
      data={tweets}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <Tweet tweet={item} />}
    />
  </View>
);

export default Feed;
