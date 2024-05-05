import sini4ka from './assets/sini4ka.jpg'
import './App.css'
import {Footer} from "./components/footer.tsx";

function App() {

  return (
    <>
      <div>
          <img src={sini4ka} className="logo" alt="React logo" />
          <Footer/>
      </div>
    </>
  )
}

export default App
