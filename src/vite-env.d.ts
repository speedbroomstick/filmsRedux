/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_BASE_URL_API: string;
  VITE_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
