import {Box, Card, CardBody, Flex, Heading, Image, Link, Text} from "@chakra-ui/react";
import {FC} from "react";

interface CoordCardProps {
    name: string,
    img: string,
    description: string
    tgLink:string
}

export const CoordCard:FC<CoordCardProps> = ({img, description, name, tgLink})=> {
    return <Card borderRadius='24px' overflow='hidden' color='zhgut.500'>

        <Image src={img} alt={name}/>
        <CardBody p={4}>
            <Flex direction='column' justifyContent='space-between' h='full' gap={4}>

                <Box>

                    <Heading fontSize='3xl' pb={4}>{name}</Heading>
        <Text>
            {description}
        </Text>

                </Box>


            <Link target='_blank' textDecoration='underline' color='lobotomia.500' href={`t.me/${tgLink}`}>
            @{tgLink}
        </Link>
            </Flex>

        </CardBody>

</Card>
}