import { colors, fontSize } from "@/constants/constants";
import {
  FontAwesome,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import { MiniPlayer } from "../components/MiniPlayer";

export default function TabsLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: colors.primary,
          tabBarLabelStyle: {
            fontSize: fontSize.xs,
            fontWeight: "500",
          },
          headerShown: false,
          tabBarStyle: {
            position: "absolute",
            borderTopWidth: 0,
            paddingTop: 8,
            backgroundColor: colors.semiTransparentBackground,
          },
          tabBarBackground: () => (
            <BlurView
              intensity={50}
              style={{
                ...StyleSheet.absoluteFillObject,
              }}
            />
          ),
        }}
      >
        <Tabs.Screen
          name="(library)"
          options={{
            title: "Library",
            tabBarIcon: ({ color }) => (
              <Ionicons name="library" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="collections"
          options={{
            title: "Collections",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="playlist-play"
                size={24}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="bookmarks"
          options={{
            title: "Bookmarks",
            tabBarIcon: ({ color }) => (
              <FontAwesome name="bookmark" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color }) => (
              <FontAwesome6 name="user-large" size={24} color={color} />
            ),
          }}
        />
      </Tabs>
      <MiniPlayer
        style={{
          position: "absolute",
          bottom: 83,
        }}
      />
    </>
  );
}
