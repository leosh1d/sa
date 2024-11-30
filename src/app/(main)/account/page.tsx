'use client'

import {VStack, Button, Skeleton, Box, Text} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {getRegi, Rega} from "@/app/api/userActions/getRegi";
import {useCommonState} from "@/state/common/commonState";
import {useRouter} from "next/navigation";
import {LogoutAction} from "@/components/auth/logout";
import {getUserId} from "@/components/auth/getUserId";
import {RegaCard} from "@/components/events/regaCard";
import LinkProfilePage from "@/app/(main)/link-profile/page";

type RegiState = {
    isLoading: boolean,
    searched: boolean
    value: Rega[]
}

export default function AccountPage() {
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
                const regi = await getRegi(userId)
                setState({isLoading: false, value: regi, searched: true})
            } else {
                setState({isLoading: !isAuthorizedCheck, value: [], searched: true})
            }
        }
        action()
    }, [isAuthorized, isAuthorizedCheck]);


    const router = useRouter()

    console.warn(state.value)
    return (
        <VStack w='full' justifyContent='space-between' flexGrow={1}>
            <Box/>
            <VStack p={2} justifyContent='center'>


                {(!isAuthorized && isAuthorizedCheck) ?
                    <Text>ты не авторизован!</Text> : (state.isLoading || !state.searched) ? <Skeleton>
                        <RegaCard date='' type='drbi' checkIsConfirmed={false} name={''} ticketType={'обычный'} usedTicker={false} id={''}/>
                    </Skeleton> : <>
                        {state.value.length === 0 ? <>
                           <LinkProfilePage/>
                        </> : state.value.map((item) => <RegaCard key={item.date} {...item}/>)}
                    </>}
            </VStack>

            {/*        {!state.searched ? <form onSubmit={action}>*/}
            {/*            <VStack>*/}
            {/*                <FormControl isRequired>*/}
            {/*                    <FormLabel>введи свое фио и проверь статус проходки</FormLabel>*/}
            {/*                    <Input onChange={handleInputChange}/>*/}
            {/*                </FormControl>*/}
            {/*                <Button w='full' type='submit' colorScheme='zhgut'>найти</Button> </VStack>*/}
            {/*        </form> : state.value.length === 0 ? <VStack>*/}
            {/*            <Text>твоей проходки не найдено</Text>*/}
            {/*            <Link href={'/'} w='full'>*/}
            {/*                <Button colorScheme='zhgut' w='full'*/}
            {/*                >вернуться на главную</Button>*/}
            {/*            </Link>*/}
            {/*            <Button variant='outline'*/}
            {/*                    colorScheme='zhgut'*/}
            {/*                    w='full'*/}
            {/*                onClick={()=> setState({...state, searched: false})}*/}
            {/*            >поискать заново</Button>*/}

            {/*        </VStack> : state.value.map((item) => <RegaCard key={item.date} {...item}/>)}*/}
            {/*    </>}*/}
            {/*</Box>*/}

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