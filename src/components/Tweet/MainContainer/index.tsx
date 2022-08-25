import { Entypo } from "@expo/vector-icons";
import moment from "moment";
import React from "react";
import { Image, Text, View } from "react-native";
import { Tweet } from "../../../models";
import Footer from "../Footer";
import styles from "./styles";

export type MainContainerProps = {
  tweet: Tweet;
};

const MainContainer = ({ tweet }: MainContainerProps) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.tweetHeaderContainer}>
        <View style={styles.tweetHeaderNames}>
          <Text style={styles.name}>{tweet?.User?.name}</Text>
          <Text style={styles.username}>@{tweet?.User?.username}</Text>
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
          <Image
            source={{ uri: tweet.image }}
            style={styles.tweetContentImage}
          />
        )}
      </View>
      <Footer tweet={tweet} />
    </View>
  );
};

export default MainContainer;
