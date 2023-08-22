import {BrowserRouter, Route, Routes } from "react-router-dom"
import Items from "./Items"
import CreateItem from "./CreateItem"
import UpdateItem from "./UpdateItem"

function App() {
  return (
    <>
      <BrowserRouter>
              <Routes>
                  <Route path="/" element={ <Items /> }/>
                  <Route path="/create" element={ <CreateItem /> }/>
                  <Route path="/update/:id" element={ <UpdateItem /> }/>
              </Routes>
      </BrowserRouter>
    </>
  )
}

export default App