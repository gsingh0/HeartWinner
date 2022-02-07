import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/home/Home';
import Logout from '../../screens/settings/Logout';

const Tab = createBottomTabNavigator();

export default function TabNavigators() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home} options={{ headerShown: false }}/>
            <Tab.Screen name='Logout' component={Logout} options={{ headerShown: false }}/>
        </Tab.Navigator>
    )
}