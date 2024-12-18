import { Stack } from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

export default function RootLayout() {
  return (
    <SafeAreaProvider>
			<GestureHandlerRootView style={{ flex: 1 }}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
				<StatusBar style="auto" />
			</GestureHandlerRootView>
		</SafeAreaProvider>
		
	)
}
