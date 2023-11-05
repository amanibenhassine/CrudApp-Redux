
import './App.css'
import Home from './Home'
import Create from './Create.jsx'
import{BrowserRouter, Routes ,Route} from "react-router-dom"
import Update from './Update.jsx'
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/create" element={<Create />}></Route>
      <Route path="/edit/:id" element={<Update />}></Route>


    </Routes>
    </BrowserRouter>
    
     
    
  )
}

export default App
