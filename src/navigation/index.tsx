import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';

const Stack = createNativeStackNavigator();

export enum ScreenName {
    Chat = 'Chat',
    Home = 'Home',
}

export default function RootNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={ScreenName.Home} component={HomeScreen} />
            <Stack.Screen name={ScreenName.Chat} component={ChatScreen} />
        </Stack.Navigator>
    );
}

