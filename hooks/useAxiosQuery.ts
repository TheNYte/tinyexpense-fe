import {useQuery} from '@tanstack/react-query';
import axios, {AxiosRequestConfig} from 'axios';
import {useCallback} from 'react';

export const useAxiosQuery = <T>(
  apiUrl: string,
  options: AxiosRequestConfig<never> | undefined,
) => {
  const axiosFunction = useCallback(async () => {
    const response = await axios.get(apiUrl, options);
    return response.data;
  }, [apiUrl, options]);

  return useQuery<T>({queryKey: [apiUrl], queryFn: axiosFunction});
};
