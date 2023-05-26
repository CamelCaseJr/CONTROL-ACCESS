import { api } from 'boot/axios';

export default function useApi(url) {

  
  const post = async (form = {}) => {
    try {
      const { data } = await api.post(url, form);
      return data;

    } catch (error) {
      throw new Error(error);
    }
  };
  return {
    post,
  };
}
