import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'; 
import Home from '../../screens/home/Home';
import Logout from '../../screens/settings/Logout';

const Tab = createMaterialTopTabNavigator();

export default function TabNavigators() {
    return (
        <Tab.Navigator
            shifting={true}
            labeled={true}
            // activeColor="rgb(220,20,60)"
            style={{}}
            // inactiveColor="black"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                let iconName;
    
                if (route.name === 'Home') {
                    iconName = focused
                    ? 'home-heart'
                    : 'home-heart';
                    return <MaterialCommunityIcons style={{marginTop: 5}} name={iconName} size={20} color={color} />;
                } else if (route.name === 'Logout') {
                    iconName = focused ? 'logout' : 'logout';
                    return <MaterialIcons style={{marginTop: 5}} name={iconName} size={20} color={color} />;
                }
    
                // You can return any component that you like here!
                },
                tabBarActiveTintColor: "white",
                tabBarInactiveTintColor: "white",
                swipeEnabled: true,
                tabBarIndicatorStyle: {backgroundColor: "black",},
                tabBarStyle: {backgroundColor: "rgb(220,20,60)"},
                tabBarContentContainerStyle: {marginTop: 30}
            })}>
            <Tab.Screen name='Home' component={Home} options={{ headerShown: false }}/>
            <Tab.Screen name='Logout' component={Logout} options={{ headerShown: false }}/>
        </Tab.Navigator>
    )
}