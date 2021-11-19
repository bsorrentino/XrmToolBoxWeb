import { useState, useEffect, Dispatch, SetStateAction } from 'react';

export function useSessionStorage(key:string):[ string|null, Dispatch<SetStateAction<string | null>>] {
  const [value, setValue] = useState( sessionStorage.getItem(key) )

  useEffect(() => {
    if( value ) 
        sessionStorage.setItem(key, value)
  }, [key, value]);

  return [value, setValue];
}