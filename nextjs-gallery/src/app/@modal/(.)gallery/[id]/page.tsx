import { IPics } from "@/app/gallery/page"
import Image from "next/image"
import Link from "next/link"

type Props = {
   params: Promise<{ id: string }>
}

const page = async ({params}: Props) => {
   const { id } = await params
   const res = await fetch(`http://localhost:3000/api/gallery/${id}`)
   const data: IPics = await res.json()
   

   return (
     <div className="fixed w-screen h-screen top-0 left-0 bg-black/70 flex items-center justify-center cursor-default">
      <div className="bg-white text-black p-3 w-[30%] flex flex-col">
         <div className="flex flex-row justify-end w-full">
            <Link href="/gallery" className="px-2 mt-1 inline-block text-shadow-red-500">❌</Link>
         </div>
         <div className="flex w-full justify-around flex-col items-center">
            <Image width={300} height={300} src={data.thumbnailUrl} alt="image" />
            <a href={`/gallery/${data.id}`} className="border-1 w-[50%] px-2 mt inline-block rounded-md shadow-md">View Image</a>
         </div>
      </div>
    </div>
  )
}

export default page