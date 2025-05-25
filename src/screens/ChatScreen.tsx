import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAvoidingView, Platform, View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';


export default function ChatScreen({ route }) {
    const { session_overview } = route.params;
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [suggestions, setSuggestions] = useState([
        "Can you tell me more about that moment?",
        "How did you feel back then?",
        "What did you learn from it?",
    ]);

    const handleSend = () => {
        if (!input.trim()) return;
        setMessages([...messages, { sender: 'you', text: input.trim(), id: Date.now().toString() }]);
        setInput('');
        // Optionally: update suggestions based on new message
    };

    return (
        <SafeAreaView className="flex-1 bg-white px-4 py-2">
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className="flex-1"
            >
                <Text className="text-xl font-bold text-center mb-2">Chat with Memory</Text>

                <FlatList
                    data={messages}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View className={`mb-2 ${item.sender === 'you' ? 'items-end' : 'items-start'}`}>
                            <Text className="bg-gray-200 p-2 rounded-lg">{item.text}</Text>
                        </View>
                    )}
                    className="flex-1"
                    inverted
                />

                <View className="flex-row flex-wrap gap-2 mb-2">
                    {suggestions.map((s, i) => (
                        <TouchableOpacity
                            key={i}
                            className="bg-blue-100 px-3 py-1 rounded-full"
                            onPress={() => setInput(s)}
                        >
                            <Text className="text-blue-800 text-sm">{s}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <View className="flex-row items-center border-t pt-2">
                    <TouchableOpacity className="p-2">
                        <Feather name="mic" size={24} color="black" />
                    </TouchableOpacity>
                    <TextInput
                        className="flex-1 ml-2 border border-gray-300 rounded-full px-4 py-2"
                        placeholder="Say or type something..."
                        value={input}
                        onChangeText={setInput}
                    />
                    <TouchableOpacity onPress={handleSend} className="p-2">
                        <Feather name="send" size={24} color="blue" />
                    </TouchableOpacity>
                </View>
                {/* Your Chat UI here */}
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

