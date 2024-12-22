import { colors, fontSize, screenPadding } from "@/constants/constants";
import { unknownCoverImageUri } from "@/constants/images";
import { usePlayerBackground } from "@/hooks/usePlayerBackground";
import { defaultStyles } from "@/styles/styles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";
import { ActivityIndicator, Text, View } from "react-native";
import FastImage from "react-native-fast-image";
import MarqueeText from "react-native-marquee";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useActiveTrack } from "react-native-track-player";

export default function MainPlayerScreen() {
  const active = useActiveTrack();
  let { imageColors } = usePlayerBackground(
    active?.cover ?? unknownCoverImageUri
  );
  const { top, bottom } = useSafeAreaInsets();

  const text = "Chapter 1 hehehehehhehehehehhehehehehhehehehehheheheheh";
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
          paddingHorizontal: screenPadding.horizontal,
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
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-end",
                justifyContent: "center",
                gap: 12,
              }}
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
            </View>
            <Text>Herro</Text>
            <Text>Herro</Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}
