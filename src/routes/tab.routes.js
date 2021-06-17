import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialIcons, FontAwesome, Fontisto, MaterialCommunityIcons } from '@expo/vector-icons';

import HomeStack from './home.routes';
import UserStack from './user.routes';
import NotificationStack from './notifications.routes';
import ChatStack from './chat.routes';

const TabStack = createBottomTabNavigator();

const TabRoutes = () => (
  <TabStack.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        let IconComponent;
        if (route.name === 'HomeStack') { size = 28,
          iconName = focused ? 'home' : 'home';
          IconComponent = MaterialIcons;
        } else if (route.name === 'UserStack') { size = 28
          iconName = focused ? 'user-circle' : 'user-circle';
          IconComponent = FontAwesome;
        } else if (route.name === 'NotificationStack') { size = 28
          iconName = focused ? 'bell' : 'bell';
          IconComponent = MaterialCommunityIcons;
        } else if (route.name === 'ChatStack') { size = 28
          iconName = focused ? 'message-text' : 'message-text';
          IconComponent = MaterialCommunityIcons;
        }
        return (
          <IconComponent
            name={`${iconName}`}
            size={size}
            color={color}
          />
        );
      },
    })}
    tabBarOptions={{
      style:{
        maxHeight: 60,
        backgroundColor: '#45108A',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
      },

      activeTintColor: '#fff',
      inactiveTintColor: '#9C7FB4',
      showLabel: false,

      tabStyle: {
      height: 50,      
      },
    }}
  >
    <TabStack.Screen name="HomeStack" component={HomeStack} />
    <TabStack.Screen name="UserStack" component={UserStack} />
    <TabStack.Screen name="NotificationStack" component={NotificationStack} />
    <TabStack.Screen name="ChatStack" component={ChatStack} />
  </TabStack.Navigator>
);

export default TabRoutes;
