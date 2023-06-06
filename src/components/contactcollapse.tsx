import styles from '../styles/contactcard.module.scss'
import { Collapse, Text } from "@nextui-org/react";
import Link from 'next/link';

export default function ContactCollapse(props : any) {
    let title = <Text className={styles.collapsetext}>{props.title}</Text>;
    let href = props.href;

    return (
        <Collapse showArrow={false} title={title} className={styles.collapse}>
                {href.map((item : any) => 
                    <Link href={item.href}><Text className={styles.innertext}>{item.title}</Text></Link>
                )}  
        </Collapse>
    )
}