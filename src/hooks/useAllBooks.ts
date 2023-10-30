import axios from "axios";
import { BooksFetchResponse } from "../types/books";
import { API_URL } from "../config/app-config";

export default async function fetchAllBooks(): Promise<BooksFetchResponse> {
  const data = await axios.post(API_URL, {
    query: `query{
        allBooks{
          id
          name
          author{
            name
          }
          cover
          category
        }
      }`,
  });

  if (data.data.errors) {
    throw new Error(data.data.errors[0].message);
  }
  return {
    data: {
      allBooks: data.data.data?.allBooks,
    },
  };
}
