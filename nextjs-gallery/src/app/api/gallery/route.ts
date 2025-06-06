import { IPics } from "@/app/gallery/page"

export const revalidate = 2000

export async function GET() {
   const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=80`)
   const data = await res.json()      
   
   const newPics = await data.map((f: IPics) => ({
      ...f,
      url: "https://placehold.co/1000x1000/red/black",
      thumbnailUrl: "https://placehold.co/300x300/yellow/black"
   }))

   return Response.json(newPics)
}     