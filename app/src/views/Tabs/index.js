import React from "react";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import { FontAwesome } from "@expo/vector-icons";
import OnChallenge from "./OnChallenge";

export default createBottomTabNavigator({
  Challenges: {
    screen: OnChallenge,
    navigationOptions: {
      tabBarLabel: "Challenges",
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="pencil" size={25} color={tintColor} />
      )
    }
  }
});
