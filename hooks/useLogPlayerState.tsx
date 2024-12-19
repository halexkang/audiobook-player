import { Event, useTrackPlayerEvents } from "react-native-track-player";

const events = [
  Event.PlaybackState,
  Event.PlaybackError,
  Event.PlaybackTrackChanged,
];

export const useLogPlayerState = () => {
  useTrackPlayerEvents(events, async (event) => {
    if (event.type === Event.PlaybackError) {
      console.warn("An error occurred: ", event);
    }

    if (event.type === Event.PlaybackState) {
      console.log("Playback state: ", event.state);
    }

    if (event.type === Event.PlaybackTrackChanged) {
      console.log("Track changed", event.position);
    }
  });
};
