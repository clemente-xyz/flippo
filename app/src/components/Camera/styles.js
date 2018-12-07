import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  cameraContainer: {
    backgroundColor: "transparent",
    alignItems: "center",
    padding: 30
  },
  loadingIndicator: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonContainer: {
    margin: 15,
    width: "100%"
  },
  timerContainer: {
    borderRadius: 5,
    backgroundColor: "#f44253",
    alignItems: "center",
    width: "100%",
    padding: 10
  },
  timerFont: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    padding: 10
  }
});

export default Styles;
