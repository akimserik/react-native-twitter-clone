import React, {useEffect, useState} from "react";
import { FlatList, View } from "react-native";
import tweets from "../../data/tweets";
import TweetComponent from "../Tweet";

import { DataStore } from '@aws-amplify/datastore';
import { Tweet } from '../../src/models';

const Feed = () => {
  const [tweets, setTweets] = useState<Tweet[]>([])
  const getTweets = async () => {
    const models = await DataStore.query(Tweet);
    setTweets(models)
  }
  useEffect(() => {
    getTweets();
  },[])

  return (
  <View style={{ width: "100%" }}>
    <FlatList
      data={tweets}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <TweetComponent tweet={item} />}
    />
  </View>
)};

export default Feed;
