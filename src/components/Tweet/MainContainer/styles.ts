import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    // width: "83%",
    flex: 1,
  },
  tweetHeaderContainer: {
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
  },
  tweetHeaderNames: {
    flexDirection: "row",
  },
  name: {
    marginHorizontal: 5,
    fontWeight: "bold",
  },
  username: {
    marginHorizontal: 5,
    color: "grey",
  },
  createdAt: {
    marginHorizontal: 5,
    color: "grey",
  },
  tweetContent: {
    marginHorizontal: 5,
    marginVertical: 5,
  },
  tweetContentText: {
    flexWrap: "nowrap",
    lineHeight: 15,
  },
  tweetContentImage: {
    width: 300,
    height: 150,
    resizeMode: "cover",
    borderRadius: 15,
    overflow: "hidden",
    marginVertical: 5,
  },
});

export default styles;
