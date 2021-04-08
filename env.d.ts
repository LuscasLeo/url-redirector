declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_HOST: string;
      DATABASE_PORT: string;
      DATABASE_NAME: string;
      DATABASE_USERNAME: string;
      DATABASE_PASSWORD: string;
      DATABASE_SYNCHRONIZE: string;
      SERVER_PORT: string;
    }
  }
}

export {};
