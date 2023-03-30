import Link from "next/link";
import styles from "@/styles/Home.module.css";
import {AiOutlineMenu} from 'react-icons/ai'

export default function Menu() {
    return (
        <AiOutlineMenu className={styles.menuicon}/>
    )
}