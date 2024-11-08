'use client'

import {VStack, Text, Button, Box, Skeleton, FormControl, FormLabel, Input, useToast} from "@chakra-ui/react";
import {Link} from "@chakra-ui/next-js";
import {ChangeEventHandler, useState} from "react";
import {Rega} from "@/app/api/userActions/getRegi";
import {RegaCard} from "@/components/events/regaCard";
import {LinkUserId} from "@/app/api/userActions/linkUserId";
import {useCommonState} from "@/state/common/commonState";
import {getUserId} from "@/components/auth/getUserId";

type LinkState = {
    isLoading: boolean,
    searched: boolean
    value: Rega[]
}

export default function LinkProfilePage() {
    const [state, setState] = useState<LinkState>({
        isLoading: false,
        searched: false,
        value: []
    })

    const [inputText, setInputText] = useState<string>("")
    const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setInputText(e.target.value)
    }

    const toast = useToast()

    const action = async () => {
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

        const regi = await LinkUserId(inputText)
        if (regi.length === 0) {
            return setState({isLoading: false, value: [], searched: true})
        }
        if (!regi[0].isHaveId) {
            setState({isLoading: false, value: regi, searched: true})
            toast({
                title: "токен установлен!",
                status: 'success',
                isClosable: true,
            })
        } else {
            toast({
                title: "у этой записи уже есть токен",
                status: 'error',
                description: "напиши в телеграмм @leosh1d для решения проблемы",
                isClosable: true,
            })
            setState({isLoading: false, value: [], searched: false})

        }
    }
    const isAuthorized = useCommonState((state) => state.isAuthorized)
    const isAuthorizedCheck = useCommonState((state) => state.isAuthorizedCheck)

    return (
        <VStack w={`full`}>
            {!isAuthorizedCheck ? <Skeleton>
                <RegaCard date='' type='drbi' checkIsConfirmed={false}/>
            </Skeleton> : isAuthorized ? <Box p={2}>
                    {state.isLoading ? <Skeleton>
                        <RegaCard date='' type='drbi' checkIsConfirmed={false}/>
                    </Skeleton> : <>
                        {!state.searched ? <form onSubmit={action}>
                            <VStack>
                                <FormControl isRequired>
                                    <FormLabel>введи свое фио для линковки с записью в таблице</FormLabel>
                                    <Input onChange={handleInputChange}/>
                                </FormControl>
                                <Button w='full' type='submit' colorScheme='zhgut'>найти</Button> </VStack>
                        </form> : state.value.length === 0 ? <VStack>
                            <Text>твоей проходки не найдено</Text>
                            <Link href={'/'} w='full'>
                                <Button colorScheme='zhgut' w='full'
                                >вернуться на главную</Button>
                            </Link>
                            <Button variant='outline'
                                    colorScheme='zhgut'
                                    w='full'
                                    onClick={() => setState({...state, searched: false})}
                            >поискать заново</Button>
                        </VStack> : state.value.map((item) => <RegaCard key={item.date} {...item}/>)}
                    </>}
                </Box>
                : <Text>авторизуйся через вк</Text>}

            {/*{isAuthorized && <Button onClick={async () => {*/}
            {/*    await logout()*/}
            {/*}*/}

            {/*}>выйти из аккаунта</Button>}*/}
        </VStack>
    )
}