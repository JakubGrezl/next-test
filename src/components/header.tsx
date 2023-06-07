import Link from 'next/link';
import styles from "../styles/header.module.scss";
import headerItems from "../../public/header.json";

export default function Header() {

    let listItems = headerItems.data.map((i) => <Link key={i.name} className={styles.link} href={i.link}>{i.name}</Link>);

    return (
        <header className={styles.main}>
            {listItems}
        </header> 
    )
}