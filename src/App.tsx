import { BrowserRouter, Route, Routes } from "react-router-dom"
import Detail from "./pages/Detail"
import Home from "./pages/Home"
import Header from "./components/Header"


const App = () => {
  return (
    <BrowserRouter>
    <div className="min-h-screen bg-gray md:py-[32px] py-[32px] px-[16px] ">
         <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/detail/:id" element={<Detail />}/>
    
    </Routes>
    </div>
   
    </BrowserRouter>
  )
}

export default App