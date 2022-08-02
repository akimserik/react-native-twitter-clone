import { Entypo } from "@expo/vector-icons";
import moment from "moment";
import React from "react";
import { Image, Text, View } from "react-native";
import { TweetType } from "../../../types";
import Footer from "../Footer";
import styles from "./styles";

export type MainContainerProps = {
  tweet: TweetType;
};

const MainContainer = ({ tweet }: MainContainerProps) => (
  <View style={styles.mainContainer}>
    <View style={styles.tweetHeaderContainer}>
      <View style={styles.tweetHeaderNames}>
        <Text style={styles.name}>{tweet?.user?.name}</Text>
        <Text style={styles.username}>@{tweet?.user?.username}</Text>
        <Text style={styles.createdAt}>
          {moment(tweet.createdAt).fromNow()}
        </Text>
      </View>
      <Entypo name="chevron-down" size={16} color="grey" />
    </View>
    <View style={styles.tweetContent}>
      <View style={styles.tweetContentText}>
        <Text>{tweet.content}</Text>
      </View>
      {tweet?.image && (
        <Image source={{ uri: tweet.image }} style={styles.tweetContentImage} />
      )}
    </View>
    <Footer tweet={tweet} />
  </View>
);

export default MainContainer;
