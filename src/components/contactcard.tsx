"use client";

import { Text } from "@nextui-org/react";
import styles from '../styles/contactcard.module.scss'
import Link from 'next/link';
import ContactCollapse from "./contactcollapse";
import list from '../../public/contacts.json';

export default function ContactCard() {

    function Generate(item : any) : any {
        if (typeof item.href === "object") {
            return <ContactCollapse href={item.href} title={item.title}/>
        } else 
        return <Link key={item.title} className={styles.link} href={item.href}><Text className={styles.innertext}>{item.title}</Text></Link>
    }
    
    return (
        <>
            <div className={styles.wrapper}>
                <Text className={styles.text} h1 size={60} color="white" weight="bold">CONTACTS</Text>
                <div className={styles.linkwrapper}>
                    {
                        list.map((item) => Generate(item))
                    }
                </div>
            </div>   
        </>
    )
}