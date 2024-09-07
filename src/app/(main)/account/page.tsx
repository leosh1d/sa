'use client'

import {VStack, Text, Button, Box, Skeleton, FormControl, FormLabel, Input} from "@chakra-ui/react";
import {Link} from "@chakra-ui/next-js";
import {ChangeEventHandler, useState} from "react";
import {getRegi, Rega} from "@/app/api/userActions/getRegi";
import {RegaCard} from "@/components/events/regaCard";

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

    const [inputText, setInputText] = useState<string>("")

    const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setInputText(e.target.value)
    }

    const action = async () => {
        setState({...state, isLoading: true})

        const regi = await getRegi(inputText)
        setState({isLoading: false, value: regi, searched: true})
    }

    return (
        <VStack w={`full`}>
            <Box p={2}>
                {state.isLoading ? <Skeleton>
                    <RegaCard date='' type='posvyat' checkIsConfirmed={false} docsIsConfirmed={false}/>
                </Skeleton> : <>

                    {!state.searched ? <form onSubmit={action}>
                        <VStack>
                            <FormControl isRequired>
                                <FormLabel>введи свое фио и проверь статус проходки</FormLabel>
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
                            onClick={()=> setState({...state, searched: false})}
                        >поискать заново</Button>

                    </VStack> : state.value.map((item) => <RegaCard key={item.date} {...item}/>)}
                </>}
            </Box>

            {/*{isAuthorized && <Button onClick={async () => {*/}
            {/*    await logout()*/}
            {/*}*/}

            {/*}>выйти из аккаунта</Button>}*/}

        </VStack>
    )

}