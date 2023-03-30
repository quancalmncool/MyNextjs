import Link from "next/link";
import styles from "@/styles/Home.module.css"

export default function SearchBar() {
    return (
        <form className={styles.searchbar}>
            <input placeholder="Search for a blog..."/>
            <button>Search</button>
        </form>
    )
}