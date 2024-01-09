import { useEffect, useState } from 'react';
import { Character } from '../types';
import { rickAndMortyApi } from '../api/rickAndMortyApi';

export const useCharacter = (id:string = '-1') => {
  const [character, setCharacter] = useState<Character>({} as Character);
  const [isLoading, setIsLoading] = useState(true);

  const loadCharacter = async () => {
    const { data } = await rickAndMortyApi.get<Character>(`/${id}`);
    setCharacter(data);
    setIsLoading(false);
  };

  useEffect(() => {
    loadCharacter();
  }, []);

  return { character, isLoading };
};
