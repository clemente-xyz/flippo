import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
import { FontAwesome } from "@expo/vector-icons";
import { Signin, Signup } from "./Auth";
import OnChallenge from "./OnChallenge";
import { Profile, Challenges } from "./Tabs";

const AuthStack = createStackNavigator({
  Signin: {
    screen: Signin,
    navigationOptions: {
      header: null
    }
  },
  Signup: {
    screen: Signup
  }
});

const ChallengeStack = createStackNavigator({
  Challenge: {
    screen: Challenges,
    navigationOptions: {
      header: null
    }
  },
  OnChallenge: { screen: OnChallenge }
});

const BottomTabNavStack = createBottomTabNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: "Me",
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="user" size={25} color={tintColor} />
      )
    }
  },
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
