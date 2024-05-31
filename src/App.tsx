import {Heading, Stack, Text, Box, Flex, VStack, Divider} from "@chakra-ui/react";
import {RollupPattern} from "./components/rollupPattern.tsx";
import {SocialMediaLink} from "./components/socialMediaLink.tsx";
import {Vk} from "./assets/icons/vk.tsx";
import {Tg} from "./assets/icons/tg.tsx";
import {Inst} from "./assets/icons/inst.tsx";

function App() {
 const pidoriIzKupertino = navigator.userAgent.match(/AppleWebKit/) && ! navigator.userAgent.match(/Chrome/)

    return (
    <>


      <Stack h={pidoriIzKupertino ? `-webkit-fill-available` : `100vh`} w={`100vw`} overflow={`hidden`} justifyContent="space-between" alignItems="center" spacing={4}>
          <Box pos={'absolute'} >
              <RollupPattern w={`100vw`}/>
          </Box>
          <Flex mt={'5rem'} mb={'5rem'} pos={`relative`} justifyContent={`center`} alignItems={'center'}>
              <Box>
                  <Heading as={'h1'} variant={`flex`} w={`auto`} fontSize={'3rem'} lineHeight={1}>студактив</Heading>
                  <Text textAlign={`right`}>бизнес-информатики</Text>
              </Box>
          </Flex>
          <VStack w={`full`} maxW={1024} divider={<Divider borderColor={`rgba(46, 57, 118)`} opacity={0.12}/>}>
              <SocialMediaLink href={'https://vk.com/studaktiv_bi'} icon={<Vk w={'16'} h={'16'}/>} buttonText={'посмотреть'}/>
              <SocialMediaLink href={'https://t.me/studaktivbi'} icon={<Tg w={'16'} h={'16'}/>} buttonText={'зачекать'}/>
              <SocialMediaLink href={'https://www.instagram.com/bi.inside_?igsh=MW5pczI1cWpjcmdtOQ=='} icon={<Inst w={'16'} h={'16'}/>} buttonText={'перейти'}/>

          </VStack>
      </Stack>
    </>
  )
}

export default App
