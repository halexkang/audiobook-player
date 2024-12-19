import { useEffect, useRef } from "react";
import TrackPlayer, {
  Capability,
  RatingType,
  RepeatMode,
} from "react-native-track-player";

const setupPlayer = async () => {
  await TrackPlayer.setupPlayer();
  await TrackPlayer.setVolume(0.3);
  await TrackPlayer.setRepeatMode(RepeatMode.Queue);
};

export const useSetupPlayer = ({ onLoad }: { onLoad?: () => void }) => {
  const isInitialized = useRef(false);
  useEffect(() => {
    if (isInitialized.current) return;
    setupPlayer()
      .then(() => {
        isInitialized.current = true;
        onLoad?.();
      })
      .catch((error) => {
        isInitialized.current = false;
        console.error(error);
      });
  }, [onLoad]);
};
