'use client'

import {VStack, Text, Button, Box, Skeleton} from "@chakra-ui/react";
import {Link} from "@chakra-ui/next-js";
import {useEffect, useState} from "react";
import {getRegi, Rega} from "@/app/api/userActions/getRegi";
import {RegaCard} from "@/components/events/regaCard";

type RegiState = {
    isLoading: boolean,
    value: Rega[]
}

export default function AccountPage() {
    const [state, setState] = useState<RegiState>({
        isLoading: true,
        value: []
    })

    const action = async () => {
        const regi = await getRegi()
        setState({isLoading: false, value: regi})
    }
    useEffect(() => {
        action()
    }, []);


    return (
        <VStack w={`full`}>
            {!state.isLoading && state.value?.length && state.value.length === 0 && <>
                <Text>пока нет оплаченных проходок </Text>
                <Link href={'/'}>
                    <Button colorScheme='zhgut'>вернуться на главную</Button>
                </Link>
            </>
            }
            <Box p={2}>
                {state.isLoading ? <Skeleton>
                    <RegaCard date='' type='posvyat' checkIsConfirmed={false} docsIsConfirmed={false}/>
                </Skeleton> : state.value.map((item) => <RegaCard key={item.date} {...item}/>)}
            </Box>

        </VStack>
    )

}