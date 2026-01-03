
// import { Metadata } from "next";
// import Image from "next/image";
// import Link from "next/link";
// import { getMe } from "@/lib/api/serverApi";
// import css from "./Profile.module.css";

// export const metadata: Metadata = {
//   title: "Profile | NoteHub",
// };

// export default async function ProfilePage() {
//   const user = await getMe();

//   return (
//     <main className={css.mainContent}>
//       <div className={css.profileCard}>
//         <div className={css.header}>
//           <h1>Profile Page</h1>
//           <Link href="/profile/edit" className={css.editProfileButton}>
//             Edit Profile
//           </Link>
//         </div>
//         <div className={css.avatarWrapper}>
//           <Image
//             src={user.avatar || "/default-avatar.png"}
//             alt="User Avatar"
//             width={120}
//             height={120}
//             className={css.avatar}
//           />
//         </div>
//         <div className={css.profileInfo}>
//           <p>Username: {user.username}</p>
//           <p>Email: {user.email}</p>
//         </div>
//       </div>
//     </main>
//   );
// }

//
// import { useAuthStore } from "@/lib/store/authStore";
// import css from "./Profile.module.css";

// export default function ProfilePage() {
//   const { user } = useAuthStore();


//   if (!user) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <main className={css.mainContent}>
//       <div className={css.profileCard}>
//         <h1 className={css.formTitle}>Profile Page</h1>
//         <div className={css.profileInfo}>
//           <p>Username: {user.username}</p>
//           <p>Email: {user.email}</p>
//         </div>
//       </div>
//     </main>
//   );
// }
//
//
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getMe } from "@/lib/api/serverApi";
import css from "./Profile.module.css";


export const metadata: Metadata = {
  title: "Profile | NoteHub",
  description: "User profile page with account details",
};

export default async function ProfilePage() {

  const user = await getMe();

  
  if (!user) {
    redirect("/sign-in");
  }

  return (
    <main className={css.mainContent}>
      <div className={css.profileCard}>
        <div className={css.header}>
          <h1 className={css.formTitle}>Profile Page</h1>
          
          <Link href="/profile/edit" className={css.editProfileButton}>
            Edit Profile
          </Link>
        </div>

        <div className={css.avatarWrapper}>
         
          <Image
            src={user.avatar || "https://ac.goit.global/default-avatar.png"}
            alt={`${user.username}'s avatar`}
            width={120}
            height={120}
            className={css.avatar}
            priority 
          />
        </div>

        <div className={css.profileInfo}>
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
        </div>
      </div>
    </main>
  );
}