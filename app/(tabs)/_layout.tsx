import { Tabs } from "expo-router";

export default function TabsLayout() {
    return (
			<Tabs>
				<Tabs.Screen
					name="library"
					options={{
						title: 'Library',
					}}
				/>
				<Tabs.Screen
					name="explore"
					options={{
						title: 'Explore',
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
