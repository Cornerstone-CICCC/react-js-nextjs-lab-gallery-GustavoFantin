import Link from "next/link"

export interface IPics {
   id: number,
   title: string,
   url: string,
   thumbnailUrl: string
}

const fetchImages = async () => {
   const res = await fetch('http://localhost:3000/api/gallery')
   const data = await res.json()
   return data
}

const page = async () => {
   const pics: IPics[] = await fetchImages()

   return (
      <div className="flex items-center flex-col">
         <h1>My Gallery</h1>
         <section className="grid grid-cols-5 gap-9 items-center justify-center">
            {pics.map( p => (
               <Link href={`/gallery/${p.id}`} key={p.id} className="p-0 m-1 flex items-center justify-center">
                  <img className="w-3xs rounded-md" src={p.thumbnailUrl} alt="image" />
               </Link>
            ))}
         </section>
         
      </div>
   )
}

export default page