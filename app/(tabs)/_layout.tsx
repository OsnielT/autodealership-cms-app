import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { FontAwesome6 } from '@expo/vector-icons';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome6>['name'];
  color: string;
  size?: number; // Allow size to be specified
}) {
  // Use the specified size or default to 28 if not provided
  const iconSize = props.size || 28;
  return <FontAwesome6 size={iconSize} style={{ marginBottom: -3 }} {...props} />;
}


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Brand Name',
          tabBarShowLabel:false,
          tabBarIcon: ({ color }) => <TabBarIcon name="house" size={20} color={color} />,
          headerLeft:() => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome6
                    name="bars"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginLeft: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome6
                    name="circle-info"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Brand Name',
          tabBarShowLabel:false,
          tabBarIcon: ({ color }) => <TabBarIcon size={30} name="plus-square" color={color} />,
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          title: 'Brand Name',
          tabBarShowLabel:false,
          tabBarIcon: ({ color }) => <TabBarIcon size={18} name="warehouse" color={color} />,
        }}
      />
    </Tabs>
  );
}
