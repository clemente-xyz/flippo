import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1
  },
  titleContainer: {
    backgroundColor: "#4286f4",
    width: "100%",
    height: "20%",
    flexDirection: "row",
    alignItems: "center",
    padding: 30
  },
  title: {
    color: "#fff",
    fontSize: 23,
    fontWeight: "bold"
  },
  sectionsContainer: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 30,
    marginRight: 30
  },
  itemsContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  items: {
    fontSize: 18,
    padding: 15
  },
  spacer: {
    flex: 1
  },
  hr: {
    borderBottomColor: "#d9d9d9",
    borderBottomWidth: 0.7,
    width: "100%"
  },
  button: {
    color: "#4286f4"
  }
});
