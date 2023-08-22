import { useState } from "react"
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom'

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
              <Link to="/create">
                <Button gradientDuoTone="greenToBlue" size="sm">Create</Button>
              </Link>
      <div className="lift rounded-md p-2">
        {items.map((item, index) =>
          <div key={index} className="p-2 flex justify-between items-center gap-10">
            <h1>{item.name}</h1>
            <h1>{item.discepline}</h1>
            <div className="flex items-center gap-5">
              <Link to="/update">
                <Button gradientDuoTone="greenToBlue" size="sm">Edit</Button>
              </Link>
              <Button gradientDuoTone="pinkToOrange" size="sm">Edit</Button>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

export default Items