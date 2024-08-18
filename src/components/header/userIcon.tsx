import {useCommonState} from "@/state/common/commonState";
import {VkIdOneTap} from "@/components/auth/vkIdOneTap";
import {Avatar, HStack, Text} from "@chakra-ui/react";
import {Link} from "@chakra-ui/next-js";

export const UserIcon = () => {
    const isAuthorized = useCommonState((state) => state.isAuthorized);
    const avatar = useCommonState((state) => state.img)
    const name = useCommonState((state) => state.name)

    if (isAuthorized) {
        return <Link href='/account'>
            <HStack spacing={4}>
                <Avatar size='md' background='scumbria' src={avatar}/>
                <Text fontSize='xl' >{name}</Text>
            </HStack>

        </Link>
    }
    return <VkIdOneTap/>
}