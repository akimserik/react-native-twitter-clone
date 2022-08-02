import { StyleSheet } from "react-native";
import Feed from "../components/Feed";

import { View } from "../components/Themed";
import Tweet from "../components/Tweet";
import tweets from "../data/tweets";
import { RootTabScreenProps } from "../types";

export default function HomeScreen({ navigation }: RootTabScreenProps<"Home">) {
  return (
    <View style={styles.container}>
      <Feed />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
