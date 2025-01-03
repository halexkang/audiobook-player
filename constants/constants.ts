import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

export const colors = {
  primary: "#fc3c44",
  background: "#000",
  text: "#fff",
  textMuted: "#9ca3af",
  icon: "#fff",
  grayBackground: "#252525",
  semiTransparentBackground: "rgba(0,0,0,0.5)",
  touchableBackground: "rgba(211, 211, 211, 0.1)",
  maximumTrackTintColor: "rgba(255,255,255,0.4)",
  minimumTrackTintColor: "rgba(255,255,255,0.6)",
};

export const fontSize = {
  xs: 12,
  sm: 16,
  base: 20,
  lg: 24,
};

export const screenPadding = {
  horizontal: 18,
};

export const StackWithSearchBar: NativeStackNavigationOptions = {
  headerLargeTitle: true,
  headerLargeStyle: {
    backgroundColor: colors.background,
  },
  headerLargeTitleStyle: {
    color: colors.text,
  },
  headerTintColor: colors.text,
  headerTransparent: true,
  headerBlurEffect: "dark",
  headerShadowVisible: false,
};
