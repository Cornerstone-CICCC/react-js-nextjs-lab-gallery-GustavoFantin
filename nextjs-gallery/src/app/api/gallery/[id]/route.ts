import { IPics } from "@/app/gallery/page"

export const revalidate = 100

export async function GET(
   request: Request,
   { params } : { params: Promise<{ id: string }> }
   ) {
   const { id } = await params

   const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
   const data: IPics = await res.json()

   const newPics = {
      ...data,
      url: "https://placehold.co/1000x1000",
      thumbnailUrl: "https://placehold.co/300x300/yellow/black"
   }
      

   return Response.json(newPics)
}     