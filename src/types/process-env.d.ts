declare global {
  var process: {
    env: {
      REACT_APP_TMDB_KEY?: string;
      REACT_APP_GROQ_API?: string;
      [key: string]: string | undefined;
    };
  };
}

export {};
