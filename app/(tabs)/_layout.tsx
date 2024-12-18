import { Tabs } from "expo-router";

export default function TabsLayout() {
    return (
			<Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
				<Tabs.Screen
					name="index"
					options={{
						title: 'Library',
					}}
				/>
				<Tabs.Screen
					name="bookmark"
					options={{
						title: 'Bookmark',
					}}
				/>
				<Tabs.Screen
					name="settings"
					options={{
						title: 'Settings',
					}}
				/>
			</Tabs>
	)
}
