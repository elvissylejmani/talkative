export const env = {
    ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.NODE_PORT || process.env.PORT || 3000,
    DATABASE_HOST: process.env.DATABASE_HOST || "mongodb://127.0.0.1:27017/talkative"
} as const;