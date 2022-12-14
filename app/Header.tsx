import Navbar from "./Navbar";
import Link from "next/link";
import {Bars3CenterLeftIcon,MoonIcon} from "@heroicons/react/24/solid";
function Header() {
  return (
    <header>
        <div className="flex justify-between align-middle p-6 md:p-10">
            <Bars3CenterLeftIcon className="h-6 w-6 md:h-8 md:w-8 cursor-pointer dark:text-slate-300"/>
            <Link href='/' prefetch={false}>
                <h1 className="font-serif text-2xl sm:text-3xl text-center dark:text-slate-300">
                    The {""}
                    <span className="block sm:inline underline underline-offset-2 decoration-2 decoration-cyan-500">
                        DAILY
                    </span> 
                    {""} News
                </h1>
            </Link>
            <button className="flex align-middle">
                <MoonIcon className="h-6 w-6 md:h-8 md:w-8 cursor-pointer"/>
            </button>
        </div>
        <Navbar/>
    </header>
  )
}

export default Header