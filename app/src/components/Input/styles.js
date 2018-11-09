import { StyleSheet } from "react-native";

const Styles = (textColor, backgroundColor) =>
  StyleSheet.create({
    container: {
      backgroundColor: backgroundColor,
      borderColor: "transparent",
      width: "100%",
      borderWidth: 1,
      borderRadius: 5,
      padding: 10,
      color: textColor
    }
  });

export default Styles;
