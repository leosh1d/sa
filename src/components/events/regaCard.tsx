import {Box, Flex, Heading, Text, VStack, HStack, Button, BoxProps} from '@chakra-ui/react'
import {Rega} from "@/app/api/userActions/getRegi";
import {FC} from "react";
import {Clock} from "@/assets/icons/clock";
import {Check} from "@/assets/icons/check";
import {QRCodeSVG} from "qrcode.react";
import {baseDomainDev, baseDomainProd} from "@/consts/app";


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
        <Text color={value ? 'gnoy' : 'emocha'}>
            {`${prefix} ${postfix[type][`${value}`]}`}
        </Text>
    </HStack>
}

export const RegaCard: FC<Rega> = ({checkIsConfirmed, date, id}) => {
    return <Box maxW={80}>
        <Text>{date.split(',')[0]}</Text>
        <Box background='white' borderRadius='24px'>
            <Flex borderRadius='24px' justifyContent='center' alignItems='center' position='relative' overflow='hidden'>
                <Heading p={4} position='relative' zIndex={1} fontSize='xl'>день рождение бизнес информатики
                    24</Heading>
            </Flex>
            <VStack p={4} alignItems='flex-start'>
                <Text>статус:</Text>
                <RegaStatus type='check' value={checkIsConfirmed}/>
            </VStack>

            <Flex justifyContent='center' alignItems='center' pb={6}>
                <QRCodeSVG value={`https://studaktivbi.ru/check-registration/${id}`}/>
            </Flex>


        </Box>
    </Box>
}


interface FullRegaCardProps extends Rega {
    onClick?: () => void
}

export const FullRegaCard: FC<FullRegaCardProps> = ({
                                                        checkIsConfirmed,
                                                        date,
                                                        onClick,
                                                        name,
                                                        ticketType,
                                                        usedTicker
                                                    }) => {
    return <Box maxW={80}>
        <Text>{date.split(',')[0]}</Text>
        <Box background='white' borderRadius='24px'>
            <Heading p={4} position='relative' zIndex={1} fontSize='xl'>{name}</Heading>
            <Heading px={4} position='relative' zIndex={1} fontSize='lg'>{ticketType}</Heading>
            <Heading px={4} position='relative' zIndex={1} fontSize='lg'>{usedTicker ? 'прошел' : 'не прошел'}</Heading>

            <VStack p={4} alignItems='flex-start'>
                <Text>статус:</Text>
                <RegaStatus type='check' value={checkIsConfirmed}/>
            </VStack>
            <Button colorScheme={'zhgut'} size={'lg'} w={`full`} onClick={onClick} disabled={usedTicker}>прошел</Button>
        </Box>
    </Box>
}
