import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import { createSession, useChatSessionOverviews } from '@/api/chat-session-overviews';
import { useNavigation } from '@react-navigation/native';
import { ScreenName } from '@/navigation';

export default function HomeScreen() {

    const { data, isLoading, error } = useChatSessionOverviews();
    const navigation = useNavigation();

    const handleNewRecording = async () => {
        try {
            const session = await createSession('audio');
            navigation.navigate(ScreenName.Chat, { session_overview: session });
        } catch (error) {
            console.error('Failed to create session:', error);
        }
    };

    return (
        <SafeAreaView className="flex-1 bg-white px-5 pt-6">
            <Text className="text-2xl font-bold mb-4">REMEMBER ME</Text>
            <Text className="text-lg font-semibold mb-3">Recent Sessions</Text>
            {isLoading && <Text className="text-lg font-semibold mb-3">Loading...</Text>}
            {error && <Text className="text-lg font-semibold mb-3">Error !</Text>}

            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate(ScreenName.Chat, { session_overview: item })}
                        className="bg-white rounded-xl p-4 mb-3 flex-row justify-between items-center shadow-sm border border-gray-100">
                        <View>
                            <Text className="text-base font-semibold text-gray-900">
                                {item.title || `Session du ${new Date(item.created_at).toLocaleString()}`}
                            </Text>
                            <Text className="text-sm text-gray-500">{new Date(item.updated_at).toLocaleDateString()}</Text>
                        </View>
                        {item.category === 'audio' ? (
                            <MaterialCommunityIcons name="waveform" size={24} color="#6B7280" />
                        ) : (
                            <MaterialCommunityIcons name="text-box-outline" size={24} color="#6B7280" />
                        )}
                    </TouchableOpacity>
                )}
            />
            <View className="mt-6">
                <TouchableOpacity className="bg-blue-900 flex-row items-center justify-center py-4 rounded-2xl mb-3">
                    <Ionicons name="book-outline" size={20} color="white" className="mr-2" />
                    <Text className="text-white font-semibold text-base">Résumé of Life</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={handleNewRecording}
                    className="bg-blue-900 flex-row items-center justify-center py-4 rounded-2xl"
                >
                    <Ionicons name="add-circle-outline" size={20} color="white" className="mr-2" />
                    <Text className="text-white font-semibold text-base">New Recording</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
