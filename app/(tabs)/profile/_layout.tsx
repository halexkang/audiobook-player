import { StackWithSearchBar } from "@/constants/constants";
import { defaultStyles } from "@/styles/styles";
import { Stack } from "expo-router";
import { View } from "react-native";

export default function ProfileLayout() {
  return (
    <View style={defaultStyles.container}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            ...StackWithSearchBar,
            headerTitle: "Profile",
          }}
        />
      </Stack>
    </View>
  );
}
