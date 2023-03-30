import Link from "next/link";
import styles from "@/styles/Home.module.css"
import Image from "next/image";


export default function HomeLogo() {
    return (
        <div className={styles.headerlogo}>
            <Link href="./">
                <Image 
                    src="/logo.svg" 
                    alt="Logo"
                    className={styles.vercelLogo}
                    width={100}
                    height={24}
                    priority
                />
            </Link>
        </div>
    )
}