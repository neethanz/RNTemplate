/**
 * @format
 */

import "react-native-gesture-handler";
import { AppRegistry } from "react-native";
import App from "./src/App";
import { name as appName } from "./app.json";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";
import { PaperProvider } from "react-native-paper";

const Wrapper = () => (
  <Provider store={store}>
    <PaperProvider>
      <App />
    </PaperProvider>
  </Provider>
);

AppRegistry.registerComponent(appName, () => Wrapper);
