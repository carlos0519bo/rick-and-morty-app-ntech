import { useEffect, useState } from 'react';
import { Character } from '../types';
import { rickAndMortyApi } from '../api/rickAndMortyApi';

export const useSearch = () => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<Character[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (query) {
        rickAndMortyApi
          .get(`/?name=${query}`)
          .then((res) => {
            setResults(res.data.results);
            setError(null);
          })
          .catch((error) => {
            setError(error.response.data.error);
          });
      } else {
        setResults([]);
        setError(null);
      }
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [query]);

  return {
    query,
    setQuery,
    results,
    error,
  };
};
