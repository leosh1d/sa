import {Box, Flex, Heading, Text, VStack, HStack} from '@chakra-ui/react'
import {Rega} from "@/app/api/userActions/getRegi";
import {FC} from "react";
import {Clock} from "@/assets/icons/clock";
import {Check} from "@/assets/icons/check";
import {PosvyatPattern} from "@/components/patterns/posvyatPattern";


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

export const RegaCard: FC<Rega> = ({docsIsConfirmed, checkIsConfirmed, date}) => {
    return <Box maxW={80} >
        <Text>{date.split(',')[0]}</Text>
        <Box background='white'  borderRadius='24px'>
            <Flex background='gnoyLight' borderRadius='24px' h={32} justifyContent='center' alignItems='center' position='relative' overflow='hidden'>
                <Heading position='relative' zIndex={1} fontSize='4xl'>посвят 24</Heading>
                <PosvyatPattern position='absolute' inset='0' />
            </Flex>
            <VStack p={4} alignItems='flex-start'>
                <Text>статус:</Text>
                <RegaStatus type='check' value={checkIsConfirmed}/>
                <RegaStatus type='docs' value={docsIsConfirmed}/>
            </VStack>
        </Box>
    </Box>
}