import { Button, Checkbox, Label, TextInput } from 'flowbite-react';

function UpdateItem() {
    return (
     <main className="grid h-screen w-screen place-content-center">
           <form className="flex max-w-md flex-col gap-4 w-96">
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