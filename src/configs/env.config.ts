/**
 * Đọc data từ file .env
 *
 * Nhớ copy file `.env.example`, rồi đổi tên thành `.env`
 */
export const envConfig = {
    apiEndpoint: process.env.NEXT_PUBLIC_API_ENDPOINT as string,
    nextAuth: {
        secret: process.env.NEXTAUTH_SECRET as string,
    },
};
