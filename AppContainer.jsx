import * as React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, TouchableOpacity, View} from 'react-native';
import MyNavigator from './Screens/MyNavigator';
import Profile from './Screens/Profile';
import Contacts from './Screens/Contacts';
import {UserContext} from './Context/User';
const Tab = createBottomTabNavigator();
function App() {
  const [MyTheme, setTheme] = React.useState({
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#fff',
      background: '#0a1a35',
      card: '#4aa3d0',
      text: '#fff',
      placeholder: 'rgb(200, 200, 200)',
      backdrop: '#rgba(255, 255, 255, 0.577)',
    },
  });
  const data = React.useContext(UserContext);
  React.useEffect(() => {
    if (data?.ColorSelected)
      setTheme({
        ...MyTheme,
        colors: {
          ...MyTheme.colors,
          primary: data?.ColorSelected,
          card: data?.ColorSelected,
        },
      });
  }, [data?.ColorSelected]);
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
        screenOptions={{
          headerTitleStyle: {
            color: '#000000',
            fontWeight: 'bold',
            fontSize: 23,
          },
          tabBarStyle: {
            backgroundColor: '#0a1a35',
            borderTopWidth: 0, // remove top border
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
          },
          headerStyle: {
            backgroundColor: '#fff',
          },
          contentStyle: {
            backgroundColor: '#fff',
            borderBottomRightRadius: 60,
            borderBottomLeftRadius: 60,
            flex: 1,
          },
        }}>
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  backgroundColor: focused ? data?.ColorSelected : 'none',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 40,
                  width: 40,
                  borderRadius: 100,
                }}>
                <Image
                  source={require('./assets/home.png')}
                  style={{
                    width: 20,
                    height: 20,
                  }}
                />
              </View>
            ),
          }}
          name="Home"
          component={MyNavigator}
        />
        <Tab.Screen
          options={({navigation}) => ({
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  backgroundColor: focused ? data?.ColorSelected : 'none',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 40,
                  width: 40,
                  borderRadius: 100,
                }}>
                <Image
                  source={require('./assets/user.png')}
                  style={{
                    width: 20,
                    height: 20,
                  }}
                />
              </View>
            ),
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Add')}>
                <Image
                  source={require('./assets/add.png')}
                  style={{
                    width: 20,
                    height: 20,
                    marginRight: 15,
                  }}
                />
              </TouchableOpacity>
            ),
          })}
          name="Contacts"
          component={Contacts}
        />
        <Tab.Screen
          options={{
            headerShown: false,

            tabBarIcon: ({focused}) => (
              <View
                style={{
                  backgroundColor: focused ? data?.ColorSelected : 'none',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 40,
                  width: 40,
                  borderRadius: 100,
                }}>
                <Image
                  source={require('./assets/param.png')}
                  style={{
                    width: 20,
                    height: 20,
                  }}
                />
              </View>
            ),
          }}
          name="Profile"
          component={Profile}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
