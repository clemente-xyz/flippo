import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#4286f4",
    justifyContent: "center"
  },
  wallpaper: {
    flex: 1,
    alignSelf: "stretch",
    alignItems: "center"
  },
  titleContainer: {
    flex: 0.5,
    justifyContent: "center"
  },
  title: {
    color: "#fff",
    fontSize: 30
  },
  inputContainer: {
    flex: 1,
    justifyContent: "space-between",
    width: "100%",
    padding: 25
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center"
  },
  logo: {
    width: 140,
    height: 140
  }
});
