import { playbackService } from "@/constants/playbackService";
import { useLogPlayerState } from "@/hooks/useLogPlayerState";
import { useSetupPlayer } from "@/hooks/useSetupPlayer";
import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import TrackPlayer from "react-native-track-player";

SplashScreen.preventAutoHideAsync();
TrackPlayer.registerPlaybackService(() => playbackService);

export default function RootLayout() {
  const handleTrackPlayerLoaded = useCallback(() => {
    SplashScreen.hideAsync();
  }, []);

  useSetupPlayer({
    onLoad: handleTrackPlayerLoaded,
  });

  useLogPlayerState();
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="MainPlayer"
            options={{
              presentation: "card",
              gestureEnabled: true,
              gestureDirection: "vertical",
              animationDuration: 400,
              headerShown: false,
            }}
          />
        </Stack>
        <StatusBar style="auto" />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
