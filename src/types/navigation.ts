import type { StackScreenProps } from "@react-navigation/stack";

export type ApplicationStackParamList = {
  DrawerNavigator: undefined;
  AuthNavigator: undefined;
};

export type ApplicationScreenProps =
  StackScreenProps<ApplicationStackParamList>;
