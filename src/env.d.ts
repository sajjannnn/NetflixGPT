interface ImportMetaEnv {
  readonly VITE_TMDB_KEY?: string;
  readonly VITE_GROQ_API?: string;
  // add other VITE_... variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
