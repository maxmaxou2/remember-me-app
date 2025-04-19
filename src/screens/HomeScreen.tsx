import { Text, View, Button } from 'react-native';
import { useCounterStore } from '../store/useCounterStore';

export default function HomeScreen() {
    const { count, increment } = useCounterStore();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home Screen</Text>
            <Text>Count: {count}</Text>
            <Button title="Increment" onPress={increment} />
        </View>
    );
}

