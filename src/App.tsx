import "react-native-gesture-handler";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MMKV } from "react-native-mmkv";

import { ThemeProvider } from "@/theme";

import "./translations";
import RootNavigator from "./navigators/RootNavigator";

const queryClient = new QueryClient();

export const storage = new MMKV();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider storage={storage}>
        <RootNavigator />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
