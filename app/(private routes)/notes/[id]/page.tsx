// import { fetchNoteById as fetchServerNoteById } from "@/lib/api/serverApi";
// import {
//   QueryClient,
//   HydrationBoundary,
//   dehydrate,
// } from "@tanstack/react-query";
// import NoteDetailsClient from "./NoteDetails.client";
// import { Metadata } from "next";

// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }): Promise<Metadata> {
//   const { id } = await params;

//   try {
//     const note = await fetchServerNoteById(id);
//     return {
//       title: note.title,
//       description: note.content.substring(0, 40),
//     };
//   } catch {
//     return {
//       title: "Note Not Found",
//     };
//   }
// }

// type NoteDetailsPageProps = {
//   params: Promise<{ id: string }>;
// };

// export default async function NoteDetailsPage({
//   params,
// }: NoteDetailsPageProps) {
//   const { id } = await params;
//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery({
//     queryKey: ["note", id],
//     queryFn: () => fetchServerNoteById(id),
//   });

//   return (
//     <div>
//       <HydrationBoundary state={dehydrate(queryClient)}>
//         <NoteDetailsClient />
//       </HydrationBoundary>
//     </div>
//   );
// }
//
//
import { fetchNoteById as fetchServerNoteById } from "@/lib/api/serverApi";
import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from "@tanstack/react-query";
import NoteDetailsClient from "./NoteDetails.client";
import { Metadata } from "next";
import { notFound } from "next/navigation";


export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  try {
    const note = await fetchServerNoteById(id);
    
   
    if (!note) {
      return { title: "Note Not Found" };
    }

    return {
      title: note.title,
      description: note.content ? note.content.substring(0, 40) : "No content",
    };
  } catch {
    return { title: "Error" };
  }
}

type NoteDetailsPageProps = {
  params: Promise<{ id: string }>;
};


export default async function NoteDetailsPage({
  params,
}: NoteDetailsPageProps) {
  const { id } = await params;
  const queryClient = new QueryClient();


  const note = await fetchServerNoteById(id);

  
  if (!note) {
    notFound();
  }

  await queryClient.prefetchQuery({
    queryKey: ["note", id],
    queryFn: () => note, 
  });

  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <NoteDetailsClient />
      </HydrationBoundary>
    </div>
  );
}