import { createStackNavigator } from "react-navigation";
import Signin from "./Signin";

export default createStackNavigator({
  Auth: {
    screen: Signin,
    navigationOptions: {
      header: null
    }
  }
});
