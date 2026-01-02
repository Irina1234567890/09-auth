// "use client";

// import { checkSession, getMe } from "@/lib/api/clientApi";
// import { useAuthStore } from "@/lib/store/authStore";
// import { useEffect } from "react";

// type Props = {
//   children: React.ReactNode;
// };

// export const AuthProvider = ({ children }: Props) => {
//   const setUser = useAuthStore((state) => state.setUser);
//   const clearIsAuthenticated = useAuthStore(
//     (state) => state.clearIsAuthenticated
//   );

//   useEffect(() => {
//     const fetchUser = async () => {
//       const isAuthenticated = await checkSession();
//       if (isAuthenticated) {
//         const user = await getMe();
//         if (user) setUser(user);
//       } else {
//         clearIsAuthenticated();
//       }
//     };
//     fetchUser();
//   }, [setUser, clearIsAuthenticated]);

//   return children;
// };
//
// "use client";

// import { checkSession, getMe } from "@/lib/api/clientApi";
// import { useAuthStore } from "@/lib/store/authStore";
// import { useEffect } from "react";

// type Props = {
//   children: React.ReactNode;
// };

// export const AuthProvider = ({ children }: Props) => {
//   const setUser = useAuthStore((state) => state.setUser);
//   const clearIsAuthenticated = useAuthStore(
//     (state) => state.clearIsAuthenticated
//   );

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         // Додаємо try...catch, щоб 401 помилка не "валила" додаток
//         const isAuthenticated = await checkSession();

//         if (isAuthenticated) {
//           const user = await getMe();
//           if (user) setUser(user);
//         } else {
//           clearIsAuthenticated();
//         }
//       } catch (_) {
//         clearIsAuthenticated();
//         console.log("Session not found or expired");
//       }
//     };

//     fetchUser();
//   }, [setUser, clearIsAuthenticated]);

//   return children;
// };
//
//
//
// "use client";

// import { checkSession, getMe } from "@/lib/api/clientApi";
// import { useAuthStore } from "@/lib/store/authStore";
// import { useEffect } from "react";

// type Props = {
//   children: React.ReactNode;
// };

// export const AuthProvider = ({ children }: Props) => {
//   const setUser = useAuthStore((state) => state.setUser);
//   const clearIsAuthenticated = useAuthStore(
//     (state) => state.clearIsAuthenticated
//   );

//   // useEffect(() => {
//   //   const fetchUser = async () => {
//   //     const isAuthenticated = await checkSession();
//   //     if (isAuthenticated) {
//   //       const user = await getMe();
//   //       if (user) setUser(user);
//   //     } else {
//   //       clearIsAuthenticated();
//   //     }
//   //   };
//   //   fetchUser();
//   // }, [setUser, clearIsAuthenticated]);
//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const isAuthenticated = await checkSession(); // Тепер вона поверне false при 404

//         if (isAuthenticated) {
//           const user = await getMe();
//           if (user) setUser(user);
//         } else {
//           clearIsAuthenticated();
//         }
//       } catch {
//         // Ловимо будь-які інші помилки (наприклад, якщо getMe впав)
//         clearIsAuthenticated();
//       }
//     };

//     fetchUser();
//   }, [setUser, clearIsAuthenticated]);
//   return children;
// };
//
//
"use client";

import { checkSession, getMe } from "@/lib/api/clientApi";
import { useAuthStore } from "@/lib/store/authStore";
import { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const setUser = useAuthStore((state) => state.setUser);
  const clearIsAuthenticated = useAuthStore(
    (state) => state.clearIsAuthenticated
  );

  useEffect(() => {
    const fetchUser = async () => {
      const isAuthenticated = await checkSession();
      if (isAuthenticated) {
        const user = await getMe();
        if (user) setUser(user);
      } else {
        clearIsAuthenticated();
      }
    };
    fetchUser();
  }, [setUser, clearIsAuthenticated]);

  return children;
};
