import Link from "next/link"
import logoImage from "@/assets/logo.png"
import classes from "./styles/main-header.module.css"
import Image from "next/image"
import MainHeaderBackground from "./MainHeaderBackground"

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
            <li><Link href="/meals">Browse Meals</Link></li>
          </ul>
          <ul>
            <li><Link href="/community">Foodies Community</Link></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default MainHeader