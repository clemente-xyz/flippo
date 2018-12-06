import { createAppContainer, createSwitchNavigator } from "react-navigation";
import Auth from "./Auth";
import Tabs from "./Tabs";

export default createAppContainer(
  createSwitchNavigator(
    {
      Auth: Auth,
      Tabs: Tabs
    },
    {
      initialRouteName: "Auth"
    }
  )
);
