import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import AddUser from './AddUser';
import Cnv from './Conversation';
import {Image} from 'react-native';
const MyNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Ft-Hangouts"
      screenOptions={{
        headerTitleStyle: {
          color: '#000',
          fontWeight: 'bold',
          fontSize: 23,
        },
        contentStyle: {
          backgroundColor: '#fff',
          borderBottomRightRadius: 60,
          borderBottomLeftRadius: 60,
        },
        headerStyle: {
          backgroundColor: '#fff',
        },
      }}>
      <Stack.Screen name="Hangouts" component={Home} />
      <Stack.Screen name="Add" component={AddUser} />
      <Stack.Screen
        name="Messages"
        component={Cnv}
        options={{
          headerRight: () => (
            <Image
              source={require('../assets/call.png')}
              style={{
                width: 25,
                height: 25,
              }}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default MyNavigator;
