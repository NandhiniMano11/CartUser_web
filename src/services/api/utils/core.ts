import Axios from 'axios';
const BASE_URL = 'http://localhost:5000/api/v1/';

interface request {
  reqmethod: any;
  url: string;
  param?: any | null | undefined;
  reqdata?: any | null | undefined;
  file?: boolean;
}
export const common = async ({ reqmethod, url, param, reqdata }: request) => {
  return Axios({
    method: reqmethod,
    url: BASE_URL + url,
    data: reqdata,
    params: param,
    headers: {
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      // Authorization: `${localStorage.getItem('accesstoken')}`,
    },
  });
};
export const common_multipart = async ({
  reqmethod,
  url,
  param,
  reqdata,
}: request) => {
  return Axios({
    method: reqmethod,
    url: BASE_URL + url,
    data: reqdata,
    params: param,
    headers: {
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'multipart/form-data',
      // Authorization: `${localStorage.getItem('accesstoken')}`,
    },
  });
};
