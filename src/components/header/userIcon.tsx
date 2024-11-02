import {useCommonState} from "@/state/common/commonState";
import {VkIdOneTap} from "@/components/auth/vkIdOneTap";
import {Avatar, HStack, Skeleton, Text} from "@chakra-ui/react";
import {Link} from "@chakra-ui/next-js";

export const UserIcon = () => {
    const isAuthorized = useCommonState((state) => state.isAuthorized);
    const isAuthorizedCheck = useCommonState((state) => state.isAuthorizedCheck);
    const avatar = useCommonState((state) => state.img)
    const name = useCommonState((state) => state.name)

    if(!isAuthorizedCheck){
        return <Skeleton h={14} w={48}/>
    }
    if (isAuthorized) {
        return <Link href='/account'>
            <HStack spacing={4} px={4}>
                <Avatar size='md' background='scumbria' src={avatar}/>
                <Text fontSize='xl' >{name}</Text>
            </HStack>

        </Link>
    }
    return <VkIdOneTap/>
}