import { Card, Col, Text} from "@nextui-org/react";
import Link from "next/link";

export default function ProjectCard(props : any) {
    let cssLOL = props.isBright ? 'brightness(1)' : 'brightness(0.5)';
    
    return (
        <Link href={props.src}>
            <Card isPressable isHoverable>
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
                <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                {props.title}
                </Text>
                <Text h4 color="white">
                {props.subtitle}
                </Text>
            </Col>
            </Card.Header>
                <Card.Image
                css={{filter: cssLOL}}
                src={props.imageSrc}
                objectFit="cover"
                width="100%"
                height={340}
                alt="Card image background"
                />
            </Card>

        </Link>
    )
}