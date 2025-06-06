import Image from "next/image"
import { IPics } from "../page"

type Props = {
   params: Promise<{ id: string }>
}

const page = async ({ params }: Props) => {
   const { id } = await params
   const res = await fetch(`http://localhost:3000/api/gallery/${id}`)
   const data: IPics = await res.json()

   

   return (
      <div className="grid grid-cols-2 justify-center py-6">
         <div className="flex items-center justify-center">
            <Image src={data.url} alt={data.title} width={500} height={1000}/>
         </div>
         <div className="flex text-center justify-center flex-col">
            <h2 className="text-2xl underline">{data.title}</h2>
            <p>&#60;--- this image is broke!</p>
         </div>

      </div>
   )
}

export default page