import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'; 
import Home from '../../screens/home/Home';
import Logout from '../../screens/settings/Logout';

const Tab = createBottomTabNavigator();

export default function TabNavigators() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                let iconName;
    
                if (route.name === 'Home') {
                    iconName = focused
                    ? 'home-heart'
                    : 'home-heart';
                    return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                } else if (route.name === 'Logout') {
                    iconName = focused ? 'logout' : 'logout';
                    return <MaterialIcons name={iconName} size={size} color={color} />;
                }
    
                // You can return any component that you like here!
                },
                tabBarActiveBackgroundColor: 'rgb(220,20,60)',
                tabBarInactiveBackgroundColor: 'rgb(220,20,60)',
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'black',
            })}>
            <Tab.Screen name='Home' component={Home} options={{ headerShown: false }}/>
            <Tab.Screen name='Logout' component={Logout} options={{ headerShown: false }}/>
        </Tab.Navigator>
    )
}