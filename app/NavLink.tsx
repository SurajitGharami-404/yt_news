import Link from "next/link";

type props = {
    category:string,
    isActive:boolean
}

function NavLink({category,isActive}:props) {
  return (
    <Link href={`/news/${category}`} className={`navlink ${isActive&&"underline scale-110"}`} prefetch={false}>
        <h2 className="text-center p-2">{category}</h2>
    </Link>
  )
}

export default NavLink