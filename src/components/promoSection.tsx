import {Box, Container, Flex, Heading, Text, VStack} from "@chakra-ui/react";
import {motion} from "framer-motion";
import {RollupPattern} from "@/components/rollupPattern";

export const PromoSection = () =>
    <VStack overflow={'hidden'} position='relative' w={'full'}>
        <Box pos={'absolute'}>
            <RollupPattern w={`100%`} overflow='visible'/>
        </Box>
        <Flex mt={'5rem'} mb={'2rem'} pos={`relative`} justifyContent={`center`} alignItems={'center'}>
            <Box>
                <Heading as={motion.h1} variant={`flex`} w={`auto`} fontSize={'3rem'}
                         lineHeight={1}>студактив</Heading>

                <Text textAlign={`right`}>бизнес-информатики</Text>
            </Box>
        </Flex>
        <Container mb='3rem' position='relative'>
            <Text>студактив би - большая и дружная семья активных студентов образовательной программы “бизнес-информатика”. более десяти лет мы разбавляем учебу в университете нашими мероприятиями и дарим студентам незабываемые эмоции.</Text>

        </Container>

    </VStack>
