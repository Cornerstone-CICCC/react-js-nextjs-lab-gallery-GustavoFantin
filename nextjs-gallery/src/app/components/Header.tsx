import Link from "next/link"

const Header = () => {
  return (
    <header>
      <menu className="w-full bg-gray-400 flex justify-between items-center">
         <div className="logo font-bold text-lg text-black mx-5">LOGO</div>
         <nav className="flex flex-row p-5 items-center gap-5">            
               <li>
                  <Link className="underline hover:text-red-500 transition-colors" href={`/`}>Home</Link>
               </li>
               <li>
                  <Link className="underline hover:text-red-500 transition-colors" href="/gallery">Gallery</Link>
               </li>
         </nav>
      </menu>
    </header>
  )
}

export default Header