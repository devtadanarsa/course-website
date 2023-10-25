import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from "@nextui-org/react";
import { tutors } from "@/data/constants";
import { Link } from "@nextui-org/react";

export default function App() {
  const [isFollowed, setIsFollowed] = React.useState(false);
  return (
    <div className="flex gap-3 px-24">
      {tutors.map((data) => {
        return (
          <Card
            className="max-w-[340px]"
            isPressable
            onPress={() => <Link href=""></Link>}
          >
            <CardHeader className="justify-between">
              <div className="flex gap-5">
                <Avatar
                  isBordered
                  radius="full"
                  size="md"
                  src="/avatars/avatar-1.png"
                />

                <div className="flex flex-col gap-1 items-start">
                  <h4 className="text-small font-semibold leading-none text-default-600">
                    {data.name}
                  </h4>
                  <h5 className="text-small tracking-tight text-default-400">
                    @{data.social}
                  </h5>
                </div>
              </div>
            </CardHeader>
            <CardBody className="px-3 py-0 text-small text-black">
              <p>
                {data.desc}{" "}
                <span className="text-small text-default-400">
                  {data.personality}
                </span>
              </p>
            </CardBody>
            <CardFooter className="gap-3">
              <div className="flex gap-1">
                <p className=" text-default-400 text-small">
                  <span className="font-semibold text-black">{data.price}</span>
                  /Hour
                </p>
              </div>
              <div className="flex gap-1 justify-end pl-[110px]">
                <Button
                  className={
                    isFollowed
                      ? "bg-transparent text-foreground border-default-200"
                      : ""
                  }
                  color="primary"
                  radius="full"
                  size="sm"
                  variant={isFollowed ? "bordered" : "solid"}
                  onPress={() => setIsFollowed(!isFollowed)}
                >
                  {isFollowed ? "Booked" : "Book"}
                </Button>
              </div>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
