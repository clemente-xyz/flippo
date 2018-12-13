import { StyleSheet } from "react-native";

const Styles = (textColor, backgroundColor) =>
  StyleSheet.create({
    container: {
      alignItems: "center",
      backgroundColor: backgroundColor,
      borderRadius: 3,
      margin: 5
    },
    font: {
      color: textColor,
      alignItems: "center",
      padding: 20,
      paddingHorizontal: 40,
      fontSize: 18,
      fontWeight: "700"
    }
  });

export default Styles;
