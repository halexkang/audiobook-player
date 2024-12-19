import { playbackService } from "@/constants/playbackService";
import { SplashScreen, Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { useSetupPlayer } from "@/hooks/useSetupPlayer";
import TrackPlayer from "react-native-track-player";

SplashScreen.preventAutoHideAsync();
TrackPlayer.registerPlaybackService(() => playbackService);

const RootLayout = () => {
  const handleTrackPlayerLoaded = useCallback(() => {
    SplashScreen.hideAsync();
  }, []);

  useSetupPlayer({
    onLoad: handleTrackPlayerLoaded,
  });
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
};

export default RootLayout;
