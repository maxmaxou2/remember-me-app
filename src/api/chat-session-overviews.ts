import { useQuery } from '@tanstack/react-query';
import api from './axios';

export type ChatSessionOverview = {
    id: string;
    title?: string;
    description?: string;
    category: 'audio' | 'text';
    updated_at: Date;
    created_at: Date;
};

export function useChatSessionOverviews() {
    return useQuery<ChatSessionOverview[]>({
        queryKey: ['chat-session-overviews'],
        queryFn: async () => {
            const { data } = await api.get('/overviews'); // example route
            return data;
        },
    });
}

export async function createSession(category: 'audio' | 'text', title?: string, description?: string) {
    const { data } = await api.post(`/create?category=${category}`, {
        title,
        description,
    });

    return data;
}
