import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const recordings = [
    {
        id: '1',
        title: 'Growing Up',
        date: 'Today',
        time: '5:12 PM',
        type: 'audio',
    },
    {
        id: '2',
        title: 'Career',
        date: 'Yesterday',
        time: '2:45 PM',
        type: 'text',
    },
    {
        id: '3',
        title: 'Family',
        date: 'Apr 18',
        time: '10:30 AM',
        type: 'audio',
    },
];

export default function HomeScreen() {
    return (
        <SafeAreaView className="flex-1 bg-white px-5 pt-6">
            <Text className="text-2xl font-bold mb-4">REMEMBER ME</Text>
            <Text className="text-lg font-semibold mb-3">Recent Recordings</Text>

            <FlatList
                data={recordings}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View className="bg-white rounded-xl p-4 mb-3 flex-row justify-between items-center shadow-sm border border-gray-100">
                        <View>
                            <Text className="text-base font-semibold text-gray-900">{item.title}</Text>
                            <Text className="text-sm text-gray-500">{item.date} • {item.time}</Text>
                        </View>
                        {item.type === 'audio' ? (
                            <MaterialCommunityIcons name="waveform" size={24} color="#6B7280" />
                        ) : (
                            <MaterialCommunityIcons name="text-box-outline" size={24} color="#6B7280" />
                        )}
                    </View>
                )}
            />

            <View className="mt-6">
                <TouchableOpacity className="bg-blue-900 flex-row items-center justify-center py-4 rounded-2xl mb-3">
                    <Ionicons name="book-outline" size={20} color="white" className="mr-2" />
                    <Text className="text-white font-semibold text-base">Résumé of Life</Text>
                </TouchableOpacity>

                <TouchableOpacity className="bg-blue-900 flex-row items-center justify-center py-4 rounded-2xl">
                    <Ionicons name="add-circle-outline" size={20} color="white" className="mr-2" />
                    <Text className="text-white font-semibold text-base">New Recording</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

