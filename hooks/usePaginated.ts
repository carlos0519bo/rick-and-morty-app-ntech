import { rickAndMortyApi } from '../api/rickAndMortyApi';
import { useEffect, useRef, useState } from 'react';
import { Character, GetCharacterResponse } from '../types';

export const usePaginated = () => {
  const [characterList, setCharacterList] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const nextPageURL = useRef('/?page=1');

  const loadCharacters = async () => {
    setIsLoading(true);
    const resp = await rickAndMortyApi.get<GetCharacterResponse>(
      nextPageURL.current
    );
    nextPageURL.current = resp.data.info.next;
    setCharacterList([...characterList, ...resp.data.results]);
    setIsLoading(false);
  };

  useEffect(() => {
    loadCharacters();
  }, []);

  return {
    loadCharacters,
    characterList,
    isLoading,
  };
};
