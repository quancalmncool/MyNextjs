import Link from "next/link";
import styles from "@/styles/Home.module.css"
import HomeLogo from "./homelogo";
import SearchBar from "./searchbar";
import About from "./about";
import Login from "./login";
import Menu from "./menu";

export default function Header() {
    return (
        <div className={styles.header}>
            <Menu />
            <HomeLogo />
            <SearchBar />
            <div className={styles.headeritem}>
                <About />
                <Login />
            </div>
        </div>
    )
}