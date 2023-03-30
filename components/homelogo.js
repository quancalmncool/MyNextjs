import Link from "next/link";
import styles from "@/styles/Home.module.css"

export default function HomeLogo() {
    return (
        <div className={styles.headerlogo}>
            <Link href="./">MyBlog</Link>
        </div>
    )
}