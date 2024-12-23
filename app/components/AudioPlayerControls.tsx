import { colors } from "@/constants/constants";
import { FontAwesome6 } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";
import { StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native";
import TrackPlayer, { useIsPlaying } from "react-native-track-player";

type PlayerButtonProps = {
  iconSize?: number;
};

export const PlayPauseButton = ({ iconSize }: PlayerButtonProps) => {
  const { playing } = useIsPlaying();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={playing ? TrackPlayer.pause : TrackPlayer.play}
    >
      <FontAwesome6
        name={playing ? "circle-pause" : "circle-play"}
        size={iconSize}
        color={colors.text}
      />
    </TouchableOpacity>
  );
};

export const RewindButton = ({ iconSize }: PlayerButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => TrackPlayer.seekBy(30)}
    >
      <FontAwesome6
        name="arrow-rotate-left"
        size={iconSize}
        color={colors.text}
      />
    </TouchableOpacity>
  );
};

export const ForwardButton = ({ iconSize }: PlayerButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => TrackPlayer.seekBy(30)}
    >
      <FontAwesome6
        name="arrow-rotate-right"
        size={iconSize}
        color={colors.text}
      />
    </TouchableOpacity>
  );
};

export const PreviousButton = ({ iconSize }: PlayerButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => TrackPlayer.seekBy(30)}
    >
      <Feather name="skip-back" size={iconSize} color={colors.text} />
    </TouchableOpacity>
  );
};

export const NextButton = ({ iconSize }: PlayerButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => TrackPlayer.seekBy(30)}
    >
      <Feather name="skip-forward" size={iconSize} color={colors.text} />
    </TouchableOpacity>
  );
};
