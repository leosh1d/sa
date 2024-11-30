'use client'

import {VStack, Button, Skeleton, Box, Text, useToast} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {getRegi, Rega} from "@/app/api/userActions/getRegi";
import {useCommonState} from "@/state/common/commonState";
import {useRouter} from "next/navigation";
import {LogoutAction} from "@/components/auth/logout";
import {getUserId} from "@/components/auth/getUserId";
import {FullRegaCard} from "@/components/events/regaCard";
import Link from "next/link";
import {UpdateRega} from "@/app/api/userActions/updateRega";

type RegiState = {
    isLoading: boolean,
    searched: boolean
    value: Rega[]
}

interface PageProps {
    params: {
        id: string;
    };
}

const CheckRegistrationPage: React.FC<PageProps> = ({params}) => {

    const registrationId = params.id;

    const [state, setState] = useState<RegiState>({
        isLoading: false,
        searched: false,
        value: []
    })

    const isAuthorized = useCommonState((state) => state.isAuthorized)
    const setIsAuthorized = useCommonState((state) => state.setIsAuthorized)
    const isAuthorizedCheck = useCommonState((state) => state.isAuthorizedCheck);

    useEffect(() => {
        const action = async () => {
            const userId = await getUserId()
            if (userId && isAuthorizedCheck) {
                const regi = await getRegi(registrationId)
                console.warn(`setState`, regi)
                setState({isLoading: false, value: regi, searched: true})
            } else {
                setState({isLoading: !isAuthorizedCheck, value: [], searched: true})
            }
        }
        action()
    }, [isAuthorized, isAuthorizedCheck, registrationId]);

    const toast = useToast()

    const action = async (fio: string) => {
        setState({...state, isLoading: true})
        const userId = await getUserId()

        if (!userId) {
            toast({
                title: "отсуствует userId",
                description: "попробуй перезайти в вк и вернись на страницу",
                status: 'error',
                isClosable: true,
            })
            return
        }

        const regi = await UpdateRega(fio)

        console.warn(regi)

        if (regi.length === 0) {
            return setState({isLoading: false, value: [], searched: true})
        }
        if (regi[0]) {
            setState({isLoading: false, value: regi, searched: true})
            toast({
                title: "успешно!",
                status: 'success',
                isClosable: true,
            })
        } else {
            toast({
                title: "возникли ошибки",
                status: 'error',
                description: "поправь вручную через таблицу",
                isClosable: true,
            })
            setState({isLoading: false, value: [], searched: false})

        }
    }

    const router = useRouter()
    return (
        <VStack w='full' justifyContent='space-between' flexGrow={1}>
            <Box/>
            <VStack p={2} justifyContent='center'>
                {(!isAuthorized && isAuthorizedCheck) ?
                    <Text>ты не авторизован!</Text> : (state.isLoading || !state.searched) ? <Skeleton>
                        {state.value.map((rega) =>
                            <FullRegaCard {...rega}/>)}
                    </Skeleton> : <>
                        {state.value.length === 0 ? <>
                            <Text> такой проходки не найдено </Text>
                            <Link href={'/'}>
                                <Button colorScheme='zhgut'>вернуться на главную</Button>
                            </Link>
                        </> : state.value.map((item) => <FullRegaCard key={item.date} {...item}
                                                                      onClick={() => action(item.name)}/>)}
                    </>}
            </VStack>

            <Box>
                {isAuthorized && <Button colorScheme='zhgut' onClick={() => {
                    LogoutAction().then(() => {
                        setIsAuthorized(false)
                        router.push('/')
                    })
                }
                }>выйти из аккаунта</Button>}
            </Box>

        </VStack>
    )

}

export default CheckRegistrationPage