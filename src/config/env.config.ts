// This file is responsible for loading environment variables and providing a singleton instance to access them.
import { config } from "dotenv";

config({
  path: [".env", ".env.local"],
});

class EnvConfig {
  private static instance: EnvConfig;

  // eslint-disable-next-line no-unused-vars
  private constructor(
    private readonly env: EnvVars = process.env as unknown as EnvVars
  ) {}

  static getInstance(): EnvConfig {
    if (!EnvConfig.instance) {
      EnvConfig.instance = new EnvConfig();
    }
    return EnvConfig.instance;
  }

  get<K extends keyof EnvVars>(key: K): EnvVars[K] | undefined {
    return this.env[key];
  }

  getOrThrow<K extends keyof EnvVars>(key: K): EnvVars[K] {
    const value = this.env[key];
    if (!value) {
      console.error(`❌ Missing required environment variable: ${key}`);
      process.exit(1);
    }
    return value;
  }
}

export type EnvVars = {
  PORT: number;
  DATABASE_URL: string;
  NEXTAUTH_URL: string;
  NEXTAUTH_SECRET: string;
  GOOGLE_GENERATIVE_AI_API_KEY: string;
  NODE_ENV: "development" | "production" | "test" | "staging";
};

export const envVars = EnvConfig.getInstance();
