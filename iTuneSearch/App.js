import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { Login } from "./screens/Login";
import { DetailsPage } from "./screens/DetailsPage";
import { SongList } from "./screens/SongList";

const Stack = createNativeStackNavigator();
const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Details" component={DetailsPage} />
          <Stack.Screen name="List" component={SongList} />
        </Stack.Navigator>
      </NavigationContainer>
  );

}

export default App;