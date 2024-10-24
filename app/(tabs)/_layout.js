import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen 
        name="index"  
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
          tabBarLabel: "",  // Hide the label for the home tab
          tabBarActiveTintColor: 'pink',  // Active icon color
          tabBarInactiveTintColor: '#f8bbd0',  // Inactive icon color
        }} 
      />
      <Tabs.Screen 
        name="explore"  
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="compass" color={color} size={size} />
          ),
          tabBarLabel: "",  // Hide the label for the explore tab
          tabBarActiveTintColor: 'pink',  // Active icon color
          tabBarInactiveTintColor: '#f8bbd0',  // Inactive icon color
        }} 
      />
    </Tabs>
  );
}
