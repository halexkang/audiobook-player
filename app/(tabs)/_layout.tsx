import { colors, fontSize } from "@/constants/constants";
import { Tabs } from "expo-router";
import { BlurView } from "expo-blur"
import { StyleSheet } from "react-native";
import { FontAwesome, FontAwesome6, Ionicons } from '@expo/vector-icons'
 
export default function TabsLayout() {
    return (
			<Tabs screenOptions={{ 
                tabBarActiveTintColor: colors.primary,
                tabBarLabelStyle: {
                    fontSize: fontSize.xs,
                    fontWeight: '500',
                },
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    borderTopWidth: 0,
                    paddingTop: 8,
                },
                tabBarBackground: () => <BlurView intensity={30}
                style={{
                    ...StyleSheet.absoluteFillObject,
                    overflow: 'hidden',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                }} />,
            }}>
				<Tabs.Screen
					name="index"
					options={{
						title: 'Library',
                        tabBarIcon: ({ color }) => (
							<Ionicons name="library" size={24} color={color} />
						),
					}}
				/>
				<Tabs.Screen
					name="bookmark"
					options={{
						title: 'Bookmark',
                        tabBarIcon: ({ color }) => (
							<FontAwesome name="bookmark" size={24} color={color} />
						),
					}}
				/>
				<Tabs.Screen
					name="profile"
					options={{
						title: 'Profile',
                        tabBarIcon: ({ color }) => (
							<FontAwesome6 name="user-large" size={24} color={color} />
						),
					}}
				/>
			</Tabs>
	)
}
