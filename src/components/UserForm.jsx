import { useState } from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import {v4 as uuid} from 'uuid'

function UserForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newUser = {
      name,
      email,
      id: uuid(),
    };
    props.addUser (newUser);
    setName("")
    setEmail("")
  };

  return (
    <>
      <Card color="transparent" shadow={false} onSubmit={handleSubmit}>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Name
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={name}
              onChange={handleName}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={email}
              onChange={handleEmail}
            />
          </div>
          <Button className="mt-6" fullWidth type="submit">
            sign up
          </Button>
        </form>
      </Card>
    </>
  );
}

export default UserForm;
