/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DB_BASE_URL: string;
  readonly VITE_SUPABASE_KEY: string;
  readonly VITE_PORT: number;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
