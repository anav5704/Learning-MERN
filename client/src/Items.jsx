import { useState, useEffect } from "react"
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom'
import axios from "axios"

function Items() {
  const [items, setItems] = useState([])

  async function getItems(){
    try{
      const items = await axios.get("http://localhost:3001")
      setItems(items.data)
      console.log(items.data)
    }
    catch(err){
      console.log(err)
    }
  }

  async function deleteItem(id){
    try{
      const item = await axios.delete("http://localhost:3001/delete/" + id)
      console.log(item)
      window.location.reload()
    }
    catch(err){
      console.log(err)
    }
  }  

  useEffect(() => {
    getItems()
  }, [])

  return (
    <main className="grid h-screen w-screen place-content-center">
              <Link to="/create">
                <Button gradientDuoTone="greenToBlue" size="sm">Create</Button>
              </Link>
      <div className="lift rounded-md p-2">
        {items?.map((item, index) =>
          <div key={index} className="p-2 flex justify-between items-center gap-10">
            <h1>{item.name}</h1>
            <h1>{item.discepline}</h1>
            <div className="flex items-center gap-5">
              <Link to={`/update/${item._id}`}>
                <Button gradientDuoTone="greenToBlue" size="sm">Update</Button>
              </Link>
              <Button onClick={(e) => deleteItem(item._id)} gradientDuoTone="pinkToOrange" size="sm">Delete</Button>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

export default Items