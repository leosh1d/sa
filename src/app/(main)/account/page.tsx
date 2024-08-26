'use client'

import {VStack, Text, Button} from "@chakra-ui/react";
import {Link} from "@chakra-ui/next-js";

export default function AccountPage() {


    return (
        <VStack w={`full`}>
            <Text>Тут скоро появятся ваши заказы </Text>
            
            <Link href={'/'}>
                <Button colorScheme='zhgut'>вернуться на главную</Button>
            </Link>
        </VStack>
    )

}