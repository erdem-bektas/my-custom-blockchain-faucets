import axios from 'axios';
import { ITokenData } from "@/utils/ITokenData";

export interface ApiResponse<T> {
    success: string | boolean;
    data?: T;
    error?: string;
}

export const sendTokenData = async <T>(data: ITokenData): Promise<ApiResponse<T>> => {
    try {
        const response = await axios.post('/api/token-transaction', data);

        return {
            success: "pending",
            data: response.data,
        };
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return {
                success: false,
                error: error.response?.data?.message || 'An error occurred during the API call',
            };
        }
        return {
            success: false,
            error: 'An unknown error occurred',
        };
    }
};

