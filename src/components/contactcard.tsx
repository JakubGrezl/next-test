"use client";

import { Collapse, Text } from "@nextui-org/react";
import styles from '../styles/contactcard.module.scss'
import Link from 'next/link';

export default function ContactCard() {

    let list = [
        {
            title: "Instagram",
            href: "#"
        }
    ]
    
    return (
        <div className={styles.wrapper}>
            <h1>CONTACTS</h1>
            <div className={styles.linkWrapper}>
                {
                    list.map((item) =>
                        <Link href={item.href}>{item.title}</Link>   
                    )
                }
            </div>
        </div>   
    )
}