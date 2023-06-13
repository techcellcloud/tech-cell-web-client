export const envConfig =  {
    apiEndpoint: process.env.NEXT_PUBLIC_API_ENDPOINT as string,
    nextAuth: {
        secret: process.env.NEXTAUTH_SECRET as string,
    },
};
