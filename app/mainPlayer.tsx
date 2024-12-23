import { colors, fontSize, screenPadding } from "@/constants/constants";
import { unknownCoverImageUri } from "@/constants/images";
import { usePlayerBackground } from "@/hooks/usePlayerBackground";
import { defaultStyles } from "@/styles/styles";
import { Entypo, Feather } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import FastImage from "react-native-fast-image";
import MarqueeText from "react-native-marquee";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useActiveTrack } from "react-native-track-player";
import {
  ForwardButton,
  NextButton,
  PlayPauseButton,
  PreviousButton,
  RewindButton,
} from "./components/AudioPlayerControls";
import ProgressBar from "./components/ProgressBar";

export default function MainPlayerScreen() {
  const active = useActiveTrack();
  let { imageColors } = usePlayerBackground(
    active?.cover ?? unknownCoverImageUri
  );
  const { top, bottom } = useSafeAreaInsets();
  const text = "Chapter 1 hehehehehhehehehehhehehehehhehehehehheheheheh";
  const [isPressed, setIsPressed] = useState(false);

  if (!active) {
    return (
      <View style={[defaultStyles.container, { justifyContent: "center" }]}>
        <ActivityIndicator color={colors.icon} />
      </View>
    );
  }
  return (
    <LinearGradient
      colors={
        imageColors
          ? [imageColors.background, imageColors.primary]
          : [colors.background, colors.background]
      }
      style={{ flex: 1 }}
    >
      <View
        style={{
          ...defaultStyles.container,
          paddingHorizontal: screenPadding.horizontal + 20,
          backgroundColor: colors.semiTransparentBackground,
        }}
      >
        <View
          style={{
            position: "absolute",
            top: top + 8,
            left: 0,
            right: 0,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <View
            accessible={false}
            style={{
              width: 50,
              height: 6,
              borderRadius: 8,
              backgroundColor: colors.textMuted,
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            marginTop: top + 100,
            marginBottom: bottom,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              height: "40%",
            }}
          >
            <FastImage
              source={{
                uri: active.cover ?? unknownCoverImageUri,
                priority: FastImage.priority.high,
              }}
              style={{
                height: "100%",
                aspectRatio: 1,
                borderRadius: 12,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "column",
              gap: 32,
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "flex-end",
                justifyContent: "center",
                gap: 12,
                paddingHorizontal: 10,
                paddingVertical: 5,
                marginHorizontal: 10,
                borderRadius: 10,
                backgroundColor: isPressed
                  ? colors.touchableBackground
                  : "transparent",
              }}
              activeOpacity={1}
              onPressIn={() => setIsPressed(true)}
              onPressOut={() => setIsPressed(false)}
            >
              <View
                style={{
                  overflow: "hidden",
                  height: 24,
                  width: 24,
                }}
              >
                <MaterialCommunityIcons
                  name="table-of-contents"
                  size={26}
                  color={colors.text}
                />
              </View>
              <View style={{ flex: 1 }}>
                <MarqueeText
                  style={{ color: colors.text, fontSize: fontSize.base }}
                  speed={0.15}
                  loop={true}
                  delay={1500}
                >
                  {text}
                </MarqueeText>
              </View>
            </TouchableOpacity>
            <ProgressBar style={{ marginTop: 20 }} />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingVertical: 20,
              }}
            >
              <PreviousButton iconSize={32} />
              <RewindButton iconSize={32} />
              <PlayPauseButton iconSize={56} />
              <ForwardButton iconSize={32} />
              <NextButton iconSize={32} />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 10,
                paddingTop: 10,
                paddingBottom: 20,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 22, color: colors.icon }}>1</Text>
                <Feather name="x" size={16} color={colors.icon} />
              </View>
              <MaterialCommunityIcons
                name="timer-outline"
                size={28}
                color={colors.icon}
              />
              <MaterialCommunityIcons
                name="bookmark-plus-outline"
                size={28}
                color={colors.icon}
              />
              <Entypo
                name="dots-three-horizontal"
                size={28}
                color={colors.icon}
              />
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}
