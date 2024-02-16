import { useState } from "react";
import axios, { AxiosRequestConfig } from "axios";

export interface RequestData {
  email: string;
  password: string;
}

export interface IUpdateResource {
  name: string;
  color: string;
  year: string;
  pantValue: string;
}

export interface IToken {
  token: string;
}

export type RequestDataType =
  | RequestData
  | IUpdateResource
  | IUpdatedUser
  | IToken;

export interface IUpdatedUser {
  fist_name: string;
  last_name: string;
  email: string;
  avatar: string;
}
const useRequest = (
  method: string,
  url: string
): {
  loading: boolean;
  error: any;
  response: RequestDataType | null;
  makeRequest: (data?: RequestDataType) => Promise<void>;
} => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [response, setResponse] = useState<RequestDataType | null>(null);

  const makeRequest = async (data?: RequestDataType) => {
    setLoading(true);
    try {
      const config: AxiosRequestConfig = {
        method,
        url,
        data,
        headers: {
          "Content-Type": "application/json",
        },
      };
      const result = await axios(config);
      setResponse(result.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, response, makeRequest };
};

export default useRequest;
