import axios from "axios";
import { BookFetchResponse } from "../types/books";
import { API_URL } from "../config/app-config";

export default async function fetchBook(
  id: string
): Promise<BookFetchResponse> {
  const data = await axios.post(API_URL, {
    query: `query{
        book(id:"${id}"){
        id
        name
        author{
          name
        }
        cover
        description
        isFavorite
      }
        }`,
  });

  if (data.data.errors) {
    throw new Error(data.data.errors[0].message);
  }
  return {
    data: {
      book: data.data.data?.book,
    },
  };
}
