import axios from "axios";
import { API_URL } from "../config/app-config";

type PictureFetchResponse = {
  data: {
    userPicture: string;
  };
};

export default async function fetchPicture(): Promise<PictureFetchResponse> {
  const data = await axios.post(API_URL, {
    query: `query{
        userPicture
      }`,
  });

  if (data.data.errors) {
    throw new Error(data.data.errors[0].message);
  }
  return {
    data: {
      userPicture: data.data.data?.userPicture,
    },
  };
}
