import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  cameraContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row"
  },
  loadingIndicator: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    margin: 15,
    padding: 30
  }
});

export default Styles;
