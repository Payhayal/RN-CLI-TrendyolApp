import {AxiosResponse} from 'axios';
import {Client} from './instance';

export async function getRequest(URL: string, params: object) {
  const response = Client.get(URL, {
    params: params,
  });
  return response;
}
export async function updateRequest(URL: string, params: object) {
  const response = Client.put(URL, params);
  return response;
}
