import sini4ka from './assets/sini4ka.jpg'
import './App.css'
import {Footer} from "./components/footer.tsx";
import {Input, Stack} from "@chakra-ui/react";

function App() {

  return (
    <>
      <Stack bg={'#790179'}>
          <img src={sini4ka} className="logo" alt="React logo" />

          <Stack px={8} mt={4}>
              <Input placeholder='cvv code' border={`5px solid`}  p={8} fontSize={'3rem'} _placeholder={{color: '#B914FF'}} color={'#14FFF1'} />
          </Stack>

          <Footer/>
      </Stack>
    </>
  )
}

export default App
