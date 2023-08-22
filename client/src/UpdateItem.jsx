import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import {useParams, useNavigate} from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

function UpdateItem() {

  const { id } = useParams()
  const [name, setName] = useState("")
  const [discepline, setDiscepline] = useState("")
  const navigate = useNavigate()

  async function getItem(){
    try{
      const item = await axios.get("http://localhost:3001/item/" + id)
      setName(item.data.name)
      setDiscepline(item.data.discepline)
      console.log(item)
    }
    catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    getItem()
  }, [])

  const handleSubmit = async(e) => {
    e.preventDefault()
    try{
      const item = await axios.put("http://localhost:3001/updateItem/" + id, {name, discepline})
      console.log(item)
      navigate("/")
    }
    catch(err){
      console.log(err)
    }
  }

    return (
     <main className="grid h-screen w-screen place-content-center">
        <form onSubmit={handleSubmit}  className="flex max-w-md flex-col gap-4 w-96">
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="name"
            value="Your Name"
          />
        </div>
        <TextInput
          id="name"
          required
          type="text"
          value={name}
          onChange={(e) => {setName(e.target.value)}}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="discepline"
            value="Your Discepline"
          />
        </div>
        <TextInput
          id="discepline"
          required
          type="text"
          value={discepline}
          onChange={(e) => {setDiscepline(e.target.value)}}
        />
      </div>
      <Button type="submit" gradientDuoTone="greenToBlue">
        Submit
      </Button>
    </form>
     </main>
    )
  }
  
  export default UpdateItem