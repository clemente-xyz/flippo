import { createStackNavigator, createAppContainer } from "react-navigation";
import { Signin } from "./Auth";
import { Challenge } from "./Tabs";

const Views = createStackNavigator(
  {
    Auth: {
      screen: Signin,
      navigationOptions: {
        header: null
      }
    },
    Challenge: { screen: Challenge }
  },
  {
    initialRouteName: "Auth"
  }
);

export default createAppContainer(Views);
