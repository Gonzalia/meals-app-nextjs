import Link from "next/link"
import logoImage from "@/assets/logo.png"
import classes from "./styles/main-header.module.css"
import Image from "next/image"
import MainHeaderBackground from "./MainHeaderBackground"
import { usePathname } from "next/navigation"
import NavLink from "./NavLink";

const MainHeader = () => {

  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImage} alt="Logo page" priority />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li><NavLink href={'/meals'}>Browse Meals</NavLink></li>
            <li><NavLink href={'/community'}>Foodies Community</NavLink></li>


          </ul>
        </nav>
      </header>
    </>
  )
}

export default MainHeader