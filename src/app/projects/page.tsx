"use client";


import { Grid } from '@nextui-org/react'
import items from '../../../public/projects.json'
import ProjectCard from '../../components/projectcard'

export default function Projects(props : any) {
    return (
        <Grid.Container gap={2} css={{paddingTop: "100px"}}>
            {items.map((item : any) => (
            <Grid>
                <ProjectCard src={item.src} title={item.title} subtitle={item.subtitle} imageSrc={item.imageSrc} isBright={item.isBright}/>
            </Grid>
            ))}
        </Grid.Container>
    )
}