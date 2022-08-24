import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    height: "35%",
  },
  buttonText: {
    flex: 1,
    textAlign: "right",
    color: Colors.light.tint,
    fontWeight: "bold",
  },
  icon: {
    marginHorizontal: 10,
  },
  dropdown: {
    position: "absolute",
    alignSelf: "flex-end",
    backgroundColor: "#fff",
    width: "30%",
  },
  overlay: {
    // borderColor: "lightgrey",
    // width: "100%",
    // height: "50%",
  },
  item: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderBottomWidth: 0.2,
    borderBottomColor: "lightgrey",
  },
});
