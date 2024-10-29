"use client"
import {FC, Fragment, ReactNode} from "react";
import {eventType} from "@/consts/events";
import {Button, Flex, Heading, Text} from "@chakra-ui/react";
import {EventIcon} from "./eventIcon";
import {Markdown} from "@/components/markdown";
import Link from 'next/link'

interface EventCardProps {
    eventType: eventType
    active?: boolean
    title: string
    description: string
    href: string
}


export const EventCard: FC<EventCardProps> = ({eventType, title, description, href, active}) => {
    return <Flex direction='column' borderRadius={32} background='lobotomia.300'>
        {active && <Text w='full' textAlign='center' fontWeight='bold' color='white' py={1}>Активное мероприятие</Text>}
        <Flex justifyContent='center' background='fentanylLight' gap={4} alignItems={`center`}
              direction={{base: 'column', md: 'row'}} p={8} boxShadow={'0px 0px 10px 0px rgba(0, 0, 0, 0.07)'}
              borderRadius={32}>
            <EventIcon boxSize={{base: 64, md: 48}} eventType={eventType} flexShrink={0}/>
            <Flex direction='column' gap={2} maxW={96}>
                <Heading>{title}</Heading>
                <Text>{description}</Text>
                <Link href={href}>
                    <Button variant={`solid`} isDisabled={!active} colorScheme={`zhgut`}>регистрация</Button>
                </Link>
            </Flex>
        </Flex>
    </Flex>
}

export const EventCardSmall: FC<EventCardProps> = ({eventType, title, description, href}) => {
    return <Flex background='fentanylLight' gap={4} alignItems={`center`} direction={'column'} p={6}
                 boxShadow={'0px 0px 10px 0px rgba(0, 0, 0, 0.07)'}
                 borderRadius={32}>
        <EventIcon boxSize={{base: 64, md: 48}} eventType={eventType} flexShrink={0}/>
        <Flex direction='column' justifyContent='space-between' h='full' gap={4}>
            <Flex direction='column' gap={2}>
                <Heading fontSize='4xl'>{title}</Heading>
                <Flex direction='column' gap={2}> <Markdown options={{wrapper: Fragment}}>{description}</Markdown></Flex>
            </Flex>
            <Link href={href}>
                <Button variant={`solid`} colorScheme={`zhgut`}>подробнее</Button>
            </Link>
        </Flex>

    </Flex>
}


interface EventCardFullProps {
    eventType: eventType
    title: string
    coords?: ReactNode
    children: ReactNode
}
export const EventCardFull: FC<EventCardFullProps> = ({eventType, title, children}) => {
    return <Flex justifyContent='center'  gap={4} alignItems={`center`}
                 direction={{base: 'column', md: 'row'}} p={8}
                 borderRadius={32}
    >
        <EventIcon boxSize={{base: 64, md: 48}} eventType={eventType} flexShrink={0}/>

        <Flex direction='column' gap={2} maxW={96}>
            <Heading fontSize='3xl'>{title}</Heading>
            {children}
        </Flex>
    </Flex>
}