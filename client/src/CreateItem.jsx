import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { useState } from 'react';
import axios from "axios"
import {useNavigate} from "react-router-dom"

function CreateItem() {

  const [name, setName] = useState("")
  const [discepline, setDiscepline] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault()
    try{
      const item = await axios.post("http://localhost:3001/create", {name, discepline})
      console.log(item)
      navigate("/")
    }
    catch(err){
      console.log(err)
    }
  }

    return (
     <main className="grid h-screen w-screen place-content-center">
          <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4 w-96">
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
            value="Your Discipline"
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
  
  export default CreateItem