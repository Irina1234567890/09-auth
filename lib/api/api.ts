// import axios from "axios";
// const baseURL = process.env.NEXT_PUBLIC_API_URL + "/api";

// export const instance = axios.create({
//   baseURL,
//   withCredentials: true,
// });
//
//
// import axios from "axios";

// const host = process.env.NEXT_PUBLIC_API_URL || "";
// const baseURL = host.endsWith("/") ? `${host}api` : `${host}/api`;

// export const instance = axios.create({
//   baseURL,
//   withCredentials: true,
// });
//
//
// import axios from "axios";

// const baseURL =
//   typeof window !== "undefined"
//     ? "/api"
//     : (process.env.NEXT_PUBLIC_API_URL || "") + "/api";

// export const instance = axios.create({
//   baseURL: "/api",
//   withCredentials: true,
// });
//
//
// import axios from "axios";

// export const instance = axios.create({
//   baseURL: "/api",
//   withCredentials: true,
// });
//
//
// import axios from "axios";


// const baseURL = (process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000") + "/api";

// export const instance = axios.create({
//   baseURL,
//   withCredentials: true,
// });
//
//
import axios from "axios";

// Переконайся, що тут немає помилки в назві змінної
const host = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
const baseURL = `${host}/api`;

export const instance = axios.create({
  baseURL,
  withCredentials: true,
});