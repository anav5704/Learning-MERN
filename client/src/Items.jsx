import { useState } from "react"
import { Button } from 'flowbite-react';

function Items() {
  const [items, setItems] = useState([
    {
      name: "Anav", discepline: "Software Engineering"
    },
    {
      name: "Indeevar", discepline: "Mechanical Engineering"
    }
  ])

  return (
    <main className="grid h-screen w-screen place-content-center">
        <div className="rounded-md p-2">
          {items.map((item, index) => 
            <div key={index} className="p-2 flex justify-between items-center gap-10">
                <h1>{item.name}</h1>
                <h1>{item.discepline}</h1>
                <div className="flex items-center gap-5">
                  <Button gradientDuoTone="greenToBlue" size="sm">Edit</Button>
                  <Button gradientDuoTone="pinkToOrange" size="sm">Delete</Button>
                </div>
            </div> 
          )}
      </div>
    </main>
  )
}

export default Items