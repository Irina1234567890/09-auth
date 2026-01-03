// import { instance } from "./api";
// import { cookies } from "next/headers";
// import { AxiosResponse } from "axios";
// import { User } from "@/types/user";
// import { Note } from "@/types/note";
// import { NoteResponse } from "./clientApi";

// export const checkSession = async (): Promise<AxiosResponse<User>> => {
//   const cookieStore = await cookies();
//   return await instance.get("/auth/session", {
//     headers: { Cookie: cookieStore.toString() },
//   });
// };
// export const fetchServerNotes = async (params = {}): Promise<NoteResponse> => {
//   const cookieStore = await cookies();
//   const res = await instance.get("/notes", {
//     params,
//     headers: { Cookie: cookieStore.toString() },
//   });
//   return res.data;
// };
// export const getMe = async (): Promise<User> => {
//   const cookieStore = await cookies();
//   const res = await instance.get("/users/me", {
//     headers: { Cookie: cookieStore.toString() },
//   });
//   return res.data;
// };
// export const fetchNoteById = async (id: string): Promise<Note> => {
//   const cookieStore = await cookies();
//   const res = await instance.get(`/notes/${id}`, {
//     headers: { Cookie: cookieStore.toString() },
//   });
//   return res.data;
// };
// //
// //
// //
// export const getMeServer = async () => {
//   const cookieStore = await cookies();
//   const res = await instance.get("/users/me", {
//     headers: {
//       Cookie: cookieStore.toString(),
//     },
//   });
//   return res.data;
// };
//
//
import { instance } from "./api";
import { cookies } from "next/headers";
import { User } from "@/types/user";
import { Note } from "@/types/note";


const getAuthHeaders = async () => {
  const cookieStore = await cookies();
  const cookieString = cookieStore.toString();
  return {
    headers: {
      Cookie: cookieString,
    },
  };
};


export const checkSession = async (): Promise<User | null> => {
  try {
    const config = await getAuthHeaders();
    const res = await instance.get("/auth/session", config);
   
    return res.data || null;
  } catch (error) {
    return null;
  }
};


export const getMe = async (): Promise<User | null> => {
  try {
    const config = await getAuthHeaders();
    const res = await instance.get("/users/me", config);
    return res.data;
  } catch (error) {
    return null;
  }
};


export interface NoteResponse {
  notes: Note[];
  total: number;
  pages: number;
}

export const fetchServerNotes = async (params = {}): Promise<NoteResponse> => {
  try {
    const config = await getAuthHeaders();
    const res = await instance.get("/notes", {
      ...config,
      params,
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching notes on server:", error);
    return { notes: [], total: 0, pages: 0 };
  }
};


export const fetchNoteById = async (id: string): Promise<Note | null> => {
  try {
    const config = await getAuthHeaders();
    const res = await instance.get(`/notes/${id}`, config);
    return res.data;
  } catch (error) {
    return null;
  }
};