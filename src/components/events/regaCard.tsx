import {Box, Flex, Heading, Text, VStack, HStack} from '@chakra-ui/react'
import {Rega} from "@/app/api/userActions/getRegi";
import {FC} from "react";
import {Clock} from "@/assets/icons/clock";
import {Check} from "@/assets/icons/check";


interface RegaStatusProps {
    type: 'check' | 'docs',
    value: boolean
}

const RegaStatus: FC<RegaStatusProps> = ({type, value}) => {
    const prefix = type === 'check' ? "оплата" : "документы"
    const postfix = {
        check: {
            true: "подтверждена",
            false: "ожидает подтверждения"
        },
        docs: {
            true: 'подтверждены',
            false: 'ожидают подтверждения'
        }
    }
    return <HStack>
        {value ? <Check flexShrink={0} boxSize={4}/> : <Clock flexShrink={0} boxSize={4}/>}
        <Text color={value ? 'gnoy' :'emocha'}>
            {`${prefix} ${postfix[type][`${value}`]}`}
        </Text>
    </HStack>
}

export const RegaCard: FC<Rega> = ({checkIsConfirmed, date}) => {
    return <Box maxW={80} >
        <Text>{date.split(',')[0]}</Text>
        <Box background='white'  borderRadius='24px'>
            <Flex borderRadius='24px' justifyContent='center' alignItems='center' position='relative' overflow='hidden'>
                <Heading p={4} position='relative' zIndex={1} fontSize='xl'>день рождение бизнес информатики 24</Heading>
            </Flex>
            <VStack p={4} alignItems='flex-start'>
                <Text>статус:</Text>
                <RegaStatus type='check' value={checkIsConfirmed}/>
            </VStack>
        </Box>
    </Box>
}