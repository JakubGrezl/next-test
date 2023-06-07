"use client";

import { Container, Row, Col } from '@nextui-org/react';
import styles from '../styles/page.module.scss'

export default function Home() {
  return (
    <Container xl>
      <main className={styles.main}>
        <h1>Tvojemama</h1>
      </main>
    </Container>
  )
}