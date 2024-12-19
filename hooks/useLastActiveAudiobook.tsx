import { useEffect, useState } from "react";
import { Track, useActiveTrack } from "react-native-track-player";

export const useLastActiveAudiobook = () => {
  const active = useActiveTrack();
  const [lastActive, setLastActive] = useState<Track>();

  useEffect(() => {
    if (!active) return;

    setLastActive(active);
  }, [active]);

  return lastActive;
};
