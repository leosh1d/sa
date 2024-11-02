import {Box, Card, Flex, Heading, Link, Text} from "@chakra-ui/react";
import {FC} from "react";
import NextImage from "next/image";

interface CoordCardProps {
    name: string,
    img: string,
    description: string
    tgLink: string
}

export const CoordCard: FC<CoordCardProps> = ({img, description, name, tgLink}) => {
    return <Card flexDirection='row' w='full' background='fentanylLight' flexGrow={1} borderRadius='24px' overflow='hidden'
                 color='zhgut.500' >

        <Box aspectRatio={1} w={24} pos={'relative'} borderRadius='24px' overflow='hidden'>
            <NextImage fill src={img} alt={name} objectFit='cover'/>
        </Box>
        <Flex  direction='row' grow={1} justifyContent='space-between' alignItems='center' gap={0}>
            <Box px={4} py={2}>
                <Heading fontSize='xl'>{name}</Heading>
                <Text>
                    {description}
                </Text>
                <Link target='_blank' textDecoration='underline' color='lobotomia.500' href={`https://t.me/${tgLink}`}>
                    @{tgLink}
                </Link>
            </Box>
        </Flex>


    </Card>
}