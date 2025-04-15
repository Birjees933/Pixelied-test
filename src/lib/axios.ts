import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

// Generic GET request
export const GET = async <T>(
  url: string,
  config: AxiosRequestConfig = {}
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axios.get(url, config);
    return response.data;
  } catch (error: any) {
    throw error?.response?.data || error;
  }
};

// Generic POST request
export const POST = async <T, B = unknown>(
  url: string,
  body: B,
  config: AxiosRequestConfig = {}
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axios.post(url, body, config);
    return response.data;
  } catch (error: any) {
    throw error?.response?.data || error;
  }
};

// Generic PUT request
export const PUT = async <T, B = unknown>(
  url: string,
  body: B,
  config: AxiosRequestConfig = {}
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axios.put(url, body, config);
    return response.data;
  } catch (error: any) {
    throw error?.response?.data || error;
  }
};

// Generic DELETE request
export const DELETE = async <T>(
  url: string,
  config: AxiosRequestConfig = {}
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axios.delete(url, config);
    return response.data;
  } catch (error: any) {
    throw error?.response?.data || error;
  }
};
