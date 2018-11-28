import { createStackNavigator, createAppContainer } from "react-navigation";
import { Signin } from "./Auth";

export default () => {
  const AppStack = createStackNavigator({
    Auth: { screen: Signin }
  });
  return createAppContainer(AppStack);
};
