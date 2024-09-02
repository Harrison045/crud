import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import { useState } from "react";

function UserItem(props) {

  const [showModale, setShowModal] = useState(false)

  const handleOpen = () =>{
    setShowModal(true)
  }
  const handleClose = () =>{
    setShowModal(false)
  }

  return (
    <div>
      <h1 className="text-2xl">{props.details.name}</h1>
      <h6>{props.details.email}</h6>

      <Button onClick={handleOpen}>Edit</Button>
      <Button color="red">Delete</Button>

      <Dialog
        size="xs"
        open={showModale}
        // handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              Enter your email and password to Sign In.
            </Typography>
            <Typography className="-mb-2" variant="h6">
              Your Email
            </Typography>
            <Input label="Email" size="lg" />
            <Typography className="-mb-2" variant="h6">
              Your Password
            </Typography>
            <Input label="Password" size="lg" />
            <div className="-ml-2.5 -mt-3">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" 
            onClick={handleClose}
            fullWidth>
              Sign In
            </Button>
            <Typography variant="small" className="mt-4 flex justify-center">
              Don&apos;t have an account?
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
                
              >
                Sign up
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </Dialog>
    </div>
  );
}

export default UserItem;
