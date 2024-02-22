'use client';
import Link from "next/link"
import classes from "./styles/nav-link.module.css"
import { usePathname } from "next/navigation"

const NavLink = ({ href, children }) => {
  const path = usePathname()

  return (
    <Link href={href} className={path.startsWith(href) ? classes.active : undefined}>
      {children}
    </Link>
  )
}

export default NavLink