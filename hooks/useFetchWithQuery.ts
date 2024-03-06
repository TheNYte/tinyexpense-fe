import {useQuery} from '@tanstack/react-query';
import {useCallback} from 'react';

export const useFetchWithQuery = <T>(
  apiParams: any,
  queryKey: string,
  apiUrl: string,
) => {
  const serializedParams = JSON.stringify(apiParams);
  const fetchFunction = useCallback(async () => {
    const res = await fetch(`${apiUrl}?${serializedParams}`);
    return res.json();
  }, [apiUrl, serializedParams]);

  return useQuery<T>({
    queryKey: [queryKey],
    queryFn: fetchFunction,
  });
};
