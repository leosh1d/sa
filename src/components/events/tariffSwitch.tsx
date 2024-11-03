import {Box, VStack, Text, Flex, Button, FlexProps, BoxProps} from "@chakra-ui/react"
import {motion} from "framer-motion";
import {ForwardRefExoticComponent} from "react";

const MotionBox = motion(Box as ForwardRefExoticComponent<BoxProps>);

interface TariffSwitchProps {
    isVip: boolean,
    setIsVip: { on: () => void, off: () => void, toggle: () => void }
}

export const TariffSwitch = ({isVip, setIsVip}: TariffSwitchProps) => {

    return (<VStack spacing={4}>
        <Text fontSize="xl">
            тариф:
        </Text>

        <Flex w={'full'} pos={'relative'}>
            <Button w='50%' variant='ghost' colorScheme='white' onClick={setIsVip.off}>обычный</Button>
            <Button w='50%' variant='ghost' colorScheme='white' onClick={setIsVip.on}>вип</Button>
            <MotionBox layout borderRadius='16px' pos='absolute' w='50%' h='full' bg={'gray.200'}
                       left={!isVip ? 0 : undefined} right={isVip ? 0 : undefined} zIndex={-1}/>
        </Flex>


    </VStack>)
}