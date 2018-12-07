import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
import { FontAwesome } from "@expo/vector-icons";
import { Signin } from "./Auth";
import OnChallenge from "./OnChallenge";
import { Challenges } from "./Tabs";

const AuthStack = createStackNavigator({
  Auth: {
    screen: Signin,
    navigationOptions: {
      header: null
    }
  }
});

const ChallengeStack = createStackNavigator({
  Challenge: { screen: Challenges },
  OnChallenge: { screen: OnChallenge }
});

const BottomTabNavStack = createBottomTabNavigator({
  Challenges: {
    screen: ChallengeStack,
    navigationOptions: {
      tabBarLabel: "Challenges",
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="pencil" size={25} color={tintColor} />
      )
    }
  }
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthStack,
      Tabs: BottomTabNavStack,
      OnChallenge: OnChallenge
    },
    {
      initialRouteName: "Auth"
    }
  )
);
